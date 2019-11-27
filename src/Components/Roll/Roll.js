import React, { Component } from 'react';
import Dice from '../Dice/Dice';

class Roll extends Component {
    constructor (props) {
        super(props);
            this.state = {diceUno: 'one', diceDos: 'one'};
    }
    render () {
        return (
            <div>
                <Dice face={this.state.diceUno}/>
                <Dice face={this.state.diceDos}/>
            </div>
        )
    }
}

export default Roll;