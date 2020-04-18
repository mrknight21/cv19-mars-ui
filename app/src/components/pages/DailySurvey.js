//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import React, { Component } from 'react';
import "survey-react/survey.css";
import {Redirect} from "react-router-dom";

export class DailySurvey extends Component {
 //Define Survey JSON
 //Here is the simplest Survey with one text question

 json = {
  elements: [
    {
        "type": "boolean",
        "name": "testedPositive",
        "title": "Have you been tested positive with COVID-19/Coronavirus? ",
        "label": "Have you been tested positive with COVID-19/Coronavirus? ",
        "isRequired": true
    },
    {
        type: "matrix",
        name: "Quality",
        title: "Please indicate if you agree or disagree with the following statements",
        columns: [
            {
                value: "none",
                text: "None"
            }, {
                value: "mild",
                text: "Mild"
            }, {
                value: "moderate",
                text: "Moderate"
            }, {
                value: "severe",
                text: "Severe"
            }
        ],
        rows: [
            {
                value: "dryCough",
                text: "Do you experience dry cough?"
            }, {
                value: "fever",
                text: "Do you experience fever?"
            }, {
                value: "soreThroat",
                text: "Do you experience sore throat?"
            }, {
                value: "fatigue",
                text: "Do you experience fatigue?"
            }, {
                value: "shortnessOfBreadth",
                text: "Do you experience shortness of breadth?"
            }, {
                value: "lossOfSmell",
                text: "Do you experience loss of smell?"
            }, {
                value: "lossOfTaste",
                text: "Do you experience loss of taste"
            }, {
                value: "muscleSoreness",
                text: "Do you experience muscle soreness?"
            }, {
                value: "otherLevel",
                text: "Do you experience other conditions?"
            }
        ]
    },
    { type: "text", name: "other", title: "If other conditions please specify?", isRequired: false}
  ]
 };

 
 constructor(props) {
    super(props);
    this.state = {isComplete: false };
    this.onComplete = this.onComplete.bind(this)  
  }

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
    this.setState({
      isComplete: true
    })
  }

 render() {
  //Create the model and pass it into react Survey component
  //You may create survey model outside the render function and use it in your App or component
  //The most model properties are reactive, on their change the component will change UI when needed.
  var model = new Survey.Model(this.json);
  return (
    this.state.isComplete ? <Redirect  to={{
        pathname: "/thankyou"
      }}/> :
  <div>
    <p>Fill out the basket to help us Donate 200 Masks to the Hospital!</p>
    <br></br>
    <p>Daily Self-Assessment to support the medical profession!</p>
      <Survey.Survey model={model} onComplete={this.onComplete}/>
  </div>
  );
  /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
  //You may pass model properties directly into component or set it into model
  // <Survey.Survey model={model} mode="display"/>
  //or 
  // model.mode="display"
  // <Survey.Survey model={model}/>
  // You may change model properties outside render function. 
  //If needed react Survey Component will change its behavior and change UI.
 }
}

export default DailySurvey;