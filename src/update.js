import React from "react";
export default class MyConfigSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      textVal: "5",
      nextTextVal: "",
      new: ""
    };
  }

  updateNextTextBox() {
    this.setState({
      nextTextVal: this.state.new
    });
  }

  handleChange(value) {
    this.setState({
        textVal: value,
        new: value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.textVal}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <input type="text" value={this.state.nextTextVal} />
        <input
          type="submit"
          value="Click"
          onClick={() => this.updateNextTextBox()}
        />
      </div>
    );
  }
}
