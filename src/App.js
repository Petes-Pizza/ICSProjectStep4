import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://localhost:3001/",
      style: {
        width: "100%",
        maxWidth: "800px",
      },
      inputStyle: {
        fontSize: "32px",
        width: "calc(100% - 16px)",
        textAlign: "center",
      },
      buttonStyle: {
        fontSize: "32px",
        width: "calc(100% - 8px)",
      },
      analysis: {
        numCardSubjects: "",
        numCards: "",
        numReviews: "",
        cardSubjectAvgRating: "",
      },
      username: "",
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  getUserAnalysis(username) {
    axios
      .get(this.state.url + "User/analyze?username=" + this.state.username)
      .then((res) => {
        var data = res.data[1][0];
        data.cardSubjectAvgRating = Number(data.cardSubjectAvgRating).toFixed(
          2
        );
        this.setState({ analysis: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div
        style={{
          width: "calc(100vw - 8px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={this.state.style}>
          <input
            style={this.state.inputStyle}
            placeholder="Enter Username"
            value={this.state.username}
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
          <button
            style={this.state.buttonStyle}
            onClick={this.getUserAnalysis.bind(this)}
          >
            Analyze User
          </button>
          <Table analysis={this.state.analysis} />
        </div>
      </div>
    );
  }
}

export default App;
