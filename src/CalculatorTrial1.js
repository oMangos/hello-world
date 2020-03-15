import React, { Component } from 'react';

class MagicMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      num1: "",
      num2: "",
      num3: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, type) {
    if (type === "num1") {
      this.setState({ num1: e.target.value });
    } else if (type === "num2") {
      this.setState({ num2: e.target.value });
    } else {
      this.setState({ num3: e.target.value });
    }
  }

  render() {
    var num1 = parseFloat(this.state.num1);
    var num2 = parseFloat(this.state.num2);
    var num3 = parseFloat(this.state.num3);
    var solution = 0

    solution = (num1) ? solution + num1 : solution
    solution = (num2) ? solution + num2 : solution
    solution = (num3) ? solution + num3 : solution

    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="new-todo">
              What number do you wanna merge?
            </label>
          </p>
          <input
            onChange={value => {
              this.handleChange(value, "num1")
            }}
            value={this.state.num1}
          />
          +
          <input
            onChange={value => {
              this.handleChange(value, "num2")
            }}
            value={this.state.num2}
          />
          +
          <input
            onChange={value => {
              this.handleChange(value, "num3")
            }}
            value={this.state.num3}
          />
          =
          <input
            disabled
            value={solution}
          />
        </form>
      </div>
    );
  }

}

export default MagicMachine