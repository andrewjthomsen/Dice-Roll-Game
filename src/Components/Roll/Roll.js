import React, { Component } from "react";
import Dice from "../Dice/Dice";

class Roll extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { diceUno: "one", diceDos: "one" };
    this.roll = this.roll.bind(this);
  }

  roll() {
    //  Pick 2 new rolls
    // will result in number between 0-last index (5)
    const newDiceUno = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDiceDos = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    // set state with new rolls
    this.setState({diceUno: newDiceUno, diceDos: newDiceDos})
  }
  render() {
    return (
      <div>
        <Dice face={this.state.diceUno} />
        <Dice face={this.state.diceDos} />
        <button onClick={this.roll}>Feeling Lucky?</button>
      </div>
    );
  }
}

export default Roll;
