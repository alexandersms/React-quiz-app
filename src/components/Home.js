import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <Helmet>
      <title>Quiz App - Home</title>
    </Helmet>
    <div id="home">
      <section>
        <div>
          <span className="mdi mdi-cube-outline mdi-48px"></span>
        </div>
        <h1>Quiz App</h1>
        <div className="play-button-container">
            <ul>
                <li>
                    <Link to="/play/instructions">Play</Link>
                </li>
            </ul>
        </div>
        <div className="auth-container">
            <Link to="/login">Se connecter</Link>
            <Link to="/register">S'inscrire</Link>
        </div>
      </section>
    </div>
  </>
);

export default Home;
