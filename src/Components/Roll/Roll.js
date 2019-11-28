import React, { Component } from 'react';
import Dice from '../Dice/Dice';

class Roll extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor (props) {
        super(props);
            this.state = {diceUno: 'one', diceDos: 'one'};
    }

    roll () {
        //  Pick 2 new rolls
        // set state with new rolls
    }
    render () {
        return (
            <div>
                <Dice face={this.state.diceUno}/>
                <Dice face={this.state.diceDos}/>
                <button onClick={this.roll}>Feeling Lucky?</button>
            </div>
        )
    }
}

export default Roll;