import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import questions from "../../questions.json";

class Play extends Component {
  state = {
    questions: [],
    currentQuestion: {},
    nextQuestion: {},
    previousQuestion: {},
    answer: "",
    numberOfQuestions: 0,
    numberOfAnsweredQuestion: 0,
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    hints: 5,
    fiftyFifty: 2,
    usedFiftyFifty: false,
    time: {} 
  };

  render() {
    console.log(questions);

    return (
      <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <h2>Quiz Mode</h2>
          <div className="lifeline-container">
            <p>
              <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
              <span className="lifeline">2</span>
            </p>
            <p>
              <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
              <span className="lifeline">5</span>
            </p>
          </div>
          <div>
            <p>
              <span className="left" style={{ float: "left" }}>
                1 sur 15
              </span>
              <span className="right" style={{ float: "right" }}>
                2:15
                <span className="mdi mdi-clock-outline mdi-24px"></span>
              </span>
            </p>
          </div>
          <h5>Google a été fondé en quelle année?</h5>
          <div className="options-container">
            <p className="option">1997</p>
            <p className="option">1998</p>
          </div>
          <div className="options-container">
            <p className="option">1999</p>
            <p className="option">2000</p>
          </div>
          <div className="button-container">
            <button>Précédent</button>
            <button>Suivant</button>
            <button>Quitter</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
