/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./App.css";
import React, { createRef } from "react";
import BoardV2 from "./BoardV2";
import text from "./data";
import Timer from "./Timer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
      easy: false,
      // eslint-disable-next-line react/no-unused-state
      medium: false,
      // eslint-disable-next-line react/no-unused-state
      hard: false,
      answersShow: false,
      showMenu: "show",
      showGame: "no-show",
      darkMode: false,
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
    this.showAnswers = this.showAnswers.bind(this);
    this.newGame = this.newGame.bind(this);
    this.newGameMenu = this.newGameMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleDark = this.toggleDark.bind(this);
    this.darkMode = createRef();
  }

  // eslint-disable-next-line react/sort-comp
  newGame(e) {
    /// player selects difficulty and show right/wrong
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line no-console
    console.log(this.state.answersShow);
    /// hide menu, show game, start timer
    this.setState({
      showGame: "show",
      showMenu: "no-show",
      timerOn: true,
      // eslint-disable-next-line react/no-access-state-in-setstate
    });
    // eslint-disable-next-line no-console
  }

  handleChange(diff) {
    /// console.log(this.state);
    // eslint-disable-next-line no-console
    console.log(diff);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ easy: false, medium: false, hard: false });
    // eslint-disable-next-line react/no-unused-state
    if (diff === "easy") {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ easy: true });
    }
    if (diff === "hard") {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ hard: true });
    }
    if (diff === "medium") {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ medium: true });
    }
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line no-console
    console.log(this.state.easy);
  }

  showAnswers(e) {
    this.setState({ answersShow: e.target.checked });
  }

  newGameMenu(e) {
    /// player selects difficulty and show right/wrong
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line no-console
    this.setState({ showGame: "no-show", showMenu: "show" });
    // eslint-disable-next-line no-console
  }

  toggleDark() {
    const sud = document.getElementsByName("sudoku");
    const timer = document.getElementsByName("timer");
    const dark = document.getElementsByName("dark");
    const background = document.getElementsByName("background");
    if (this.state.darkMode) {
      this.setState({ darkMode: false });
      console.log("light");
      sud[0].style.color = "black";
      timer[0].style.color = "black";
      dark[0].style.color = "black";
      dark[0].innerHTML = "Click For Dark Mode";
      background[0].style.backgroundColor = "pink";
    } else {
      this.setState({ darkMode: true });
      console.log("dark");
      console.log(dark[0].style);
      sud[0].style.color = "white";
      timer[0].style.color = "white";
      dark[0].style.color = "white";
      dark[0].innerHTML = "Click For Light Mode";
      background[0].style.backgroundColor = "black";
    }
  }

  render() {
    return (
      <div>
        <div id={this.state.showMenu}>
          <div id="menu">
            <div id="menu-cont">
              <div>
                <form>
                  <div className="form-group row">
                    <div className="col-sm-2">Options</div>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck1"
                          onClick={this.showAnswers}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridCheck1"
                        >
                          Show Right/Wrong Answers
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <button
                        type="submit"
                        onClick={(e) => this.newGame(e)}
                        className="btn btn-primary"
                      >
                        New Game
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    defaultChecked="checked"
                    onClick={() => this.handleChange("easy")}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Easy
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                    onClick={() => this.handleChange("medium")}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Medium
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                    onClick={() => this.handleChange("easy")}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Hard
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id={this.state.showGame}>
          <div id="div-1">
            <div name="background" id="board-cont">
              <div id="header">
                <div style={{ display: "flex" }}>
                  <div>
                    <h1 name="sudoku">sudoku</h1>
                  </div>
                  <div>
                    <label className="switch">
                      <input onClick={this.toggleDark} type="checkbox" />
                      <span className="slider round" />
                      <p name="dark">Click For Dark</p>
                    </label>
                  </div>
                </div>
              </div>
              <div id="content">
                <div>
                  <div style={{ marginRight: "100px" }}>
                    <h1 name="timer">
                      <Timer timerOn={this.state.timerOn} />
                    </h1>
                  </div>
                  <form>
                    <div className="form-group row">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={this.newGameMenu}
                        >
                          New Game
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="Board">
                  <div style={{ width: "100%" }}>
                    <BoardV2
                      darkMode={this.state.darkMode}
                      answersShow={this.state.answersShow}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
