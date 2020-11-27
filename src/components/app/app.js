import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page'


import './app.css';

export default class App extends Component {

    state = {
        selectedPerson: null
    }



    render() {
       return (
           <div>
               <Header />
               <RandomPlanet />

               <PeoplePage />
           </div>
       )
    }
}