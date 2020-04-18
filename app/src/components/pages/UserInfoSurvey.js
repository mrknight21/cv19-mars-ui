//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import React, { Component } from "react";
import "survey-react/survey.css";
import {Redirect} from "react-router-dom";

export class UserInfoSurvey extends Component {
  //Define Survey JSON
  //Here is the simplest Survey with one text question
  json = {
    elements: [
      {
        type: "dropdown",
        renderAs: "select2",
        choicesByUrl: {
          url: "https://restcountries.eu/rest/v1/all",
        },
        name: "country",
        title: "Which country are you currently staying?",
      },
      {
        type: "text",
        name: "city",
        title: "Which city are you currently staying?",
        isRequired: true,
      },
      {
        name: "age",
        title: "Your current age",
        validators: [
          {
            type: "numeric",
            minValue: 0,
            maxValue: 150,
          },
        ],
      },
      {
        type: "radiogroup",
        name: "gender",
        title: "Your gender?",
        isRequired: true,
        colCount: 3,
        choices: ["Male", "Female", "LGBT"],
      },
      {
        type: "boolean",
        name: "isSmoker",
        title: "Are you a smoker?",
        label: "Are you a smoker?",
        isRequired: true,
      },
      {
        type: "checkbox",
        name: "condition",
        title: "What car are you driving?",
        isRequired: true,
        hasNone: true,
        colCount: 4,
        choices: [
          "Type2 Diabetes",
          "Type1 Diabetes",
          "Hypertension",
          "Coronary Heart Diseasesn",
          "COPD",
          "Cancer",
          "Chronic Kidney Disease",
          "Others",
        ],
      },
      {
        type: "text",
        name: "other",
        title: "If other conditions please specify?",
        isRequired: false,
      },
    ],
  };

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
    return (
      <Redirect
        to={{
          pathname: "/dailysurvey",
          state: { },
        }}
      />
    );
  }
  render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.

    var model = new Survey.Model(this.json);
    return <Survey.Survey model={model} onComplete={this.onComplete} />;
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

export default UserInfoSurvey;
