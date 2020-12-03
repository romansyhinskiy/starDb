import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';


import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../Row/Row";
import ItemDetails, {Record} from "../item-details/item-details";

export default class App extends Component {

    swapi = new SwapiService();

    state = {
        selectedPerson: null
    }

    render() {

        const {getPerson, getStarship, getPeronImage, getStarshipImage} = this.swapi

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPeronImage}
            >
                <Record  field='gender' label='Gender'/>
                <Record  field='eyeColor' label='Eye Color'/>
            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record  field='name' label='Name'/>
                <Record  field='manufacturer' label='Manufacturer'/>
                <Record  field='length' label='Length'/>
            </ItemDetails>
        )

        return (
            <ErrorBoundary>
                <Header/>
                <RandomPlanet/>

                <Row
                    left={personDetails}
                    right={starshipDetails}
                />

            </ErrorBoundary>
        )
    }
}