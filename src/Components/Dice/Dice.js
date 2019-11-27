import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    render () {
        let cls = `Dice fas fa-dice-${this.props.face}`
        return (
            <i className={cls}></i>
        )
    }
}

export default Dice;