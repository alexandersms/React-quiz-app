import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>Quiz Instructions - Quiz App</title>
    </Helmet>
    <div className="instructions container">
      <h1>Comment jouer au jeu</h1>
      <p>Assurez-vous de lire ce guide du début à la fin.</p>
      <ul className="browser-default" id="main-list">
        <li>
          Le jeu a une durée de 15 minutes et se termine dès que votre temps
          s'écoule.
        </li>
        <li>Chaque jeu se compose de 15 questions.</li>
        <li>Chaque question contient 4 options.</li>
        <li>
          Sélectionnez l'option qui répond le mieux à la question en cliquant
          (ou en la sélectionnant).
        </li>
        <li>
          Chaque jeu a 2 lignes de vie à savoir:
          <ul id="sublist">
            <li>2 50-50 chances</li>
            <li>5 conseils</li>
          </ul>
        </li>
        <li>
          La sélection d'une ligne de vie 50-50 en cliquant sur l'icône
          <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
          supprimera 2 mauvaises réponses, laissant la bonne réponse et une
          mauvaise réponse
        </li>
        <li>
        L'utilisation d'un indice en cliquant sur l'icône <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span> supprimera une mauvaise réponse, laissant deux mauvaises réponses et une bonne réponse. Vous pouvez utiliser autant d'indices que possible sur une seule question.
        </li>
        <li>N'hésitez pas à quitter (ou à vous retirer) du jeu à tout moment. Dans ce cas, votre score sera révélé par la suite.</li>
        <li>Le chronomètre démarre dès que le jeu se charge.</li>
        <li>Faisons-le si vous pensez avoir ce qu'il faut?</li>
      </ul>
      <div>
        <span className="left">
          <Link to="/">Ne me ramène pas</Link>
        </span>
        <span className="right">
          <Link to="/play/quiz">D'accord, faisons ça!</Link>
        </span>
      </div>
    </div>
  </Fragment>
);

export default QuizInstructions;
