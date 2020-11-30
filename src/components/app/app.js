import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page'


import './app.css';
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class App extends Component {

    swapi = new SwapiService();

    state = {
        selectedPerson: null
    }


    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <PeoplePage/>

                {/*<br/><br/>*/}

                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList*/}
                {/*            onItemSelected={this.onPersonSelect}*/}
                {/*            getData={this.swapi.getAllPlanets}*/}
                {/*            renderItem={(item)=> item.name}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId={this.state.selectedPerson}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<br/><br/>*/}

                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList*/}
                {/*            onItemSelected={this.onPersonSelect}*/}
                {/*            getData={this.swapi.getAllStarships}*/}
                {/*            renderItem={(item)=> item.name}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId={this.state.selectedPerson}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
}