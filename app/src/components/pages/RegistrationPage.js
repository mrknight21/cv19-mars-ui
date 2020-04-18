//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import React, { Component } from 'react';
import "survey-react/survey.css";
import {Redirect} from "react-router-dom";

export class RegistrationPage extends Component {
 //Define Survey JSON
 //Here is the simplest Survey with one text question

 constructor(props) {
  super(props);
  this.state = {isComplete: false };
  this.onComplete = this.onComplete.bind(this)  
}

 json = {
  elements: [
   { type: "text", name: "userName", title: "What is your name?", isRequired: true},
   {
    name: "userEmail",
    type: "text",
    inputType: "email",
    title: "Your e-mail:",
    placeHolder: "your@email.org",
    isRequired: true,
    validators: [
        {
            type: "email"
        }
    ]
    }
  ]
 };

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
  model.showCompletedPage = false;
  console.log(this.state.isComplete)
  return (this.state.isComplete ? <Redirect  to={{
    pathname: "/userinfo"
  }}/> : <Survey.Survey model={model} onComplete={this.onComplete}/>);
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

export default RegistrationPage;