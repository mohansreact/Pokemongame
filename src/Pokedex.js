import React, { Component } from 'react';
import Pokemancard from './Pokemancard';
import "./Pokedex.css";


class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winner</h1>
        } else {
            title= <h1 className="Pokedex-loser">Looser</h1>
        }
        return(
            <div className='Pokedex'>
                {title}
                <h3>Total: {this.props.exp}</h3>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokemancard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;