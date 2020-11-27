import React, {Component} from 'react';

import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Loader from '../loader/loader'

export default class RandomPlanet extends Component {

    swapi = new SwapiService();

    state = {
        planet: {},
        loading: true
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 18) + 2;
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
    }

   componentDidMount() {
       this.updatePlanet();
       this.interval = setInterval(this.updatePlanet, 4000)
   }

   componentWillUnmount() {
        clearInterval(this.interval)
   }

    render() {
        const {planet: {name, population, diameter, rotationPeriod, id}, loading} = this.state
        if(loading){
            return <Loader />
        }
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4>Planet {name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}
