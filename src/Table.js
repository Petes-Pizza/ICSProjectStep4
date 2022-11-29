import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <table style={{ fontSize: 24}}>
        <tbody>
          <tr>
            <td style={{ textAlign: "right" }}>
              <strong>Number of published Card Subjects:</strong>
            </td>
            <td style={{ textAlign: "left" }}>
              {" " + this.props.analysis.numCardSubjects}
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>
              <strong>Average rating of all published Card Subjects:</strong>
            </td>
            <td style={{ textAlign: "left" }}>
              {" " + this.props.analysis.cardSubjectAvgRating}
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>
              <strong>Number of reviews of all published Card Subjects:</strong>
            </td>
            <td style={{ textAlign: "left" }}>
              {" " + this.props.analysis.numReviews}
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>
              <strong>
                Number of generated Cards from all created <br />
                published Card Subjects:
              </strong>
            </td>
            <td style={{ textAlign: "left" }}>
              {" " + this.props.analysis.numCards}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
