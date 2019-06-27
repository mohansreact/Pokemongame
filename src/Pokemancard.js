import React, {Component} from "react";
import './Pokemancard.css';
const POKEMAN_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);


class Pokemancard extends Component {
    render() {
        let imgsrc = `${POKEMAN_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokemancard">
                <h1 className='Pokemancard-title'>{this.props.name}</h1>
                <div className="Pokemancard-image">
                <img src={imgsrc} alt={this.props.name}/>
                </div>
                <div className='Pokemancard-data'>Type: {this.props.type}</div>
                <div className='Pokemancard-data'>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokemancard;