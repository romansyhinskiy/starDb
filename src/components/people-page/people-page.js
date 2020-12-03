import React, {Component} from 'react'
import ItemList from "../item-list";
import PersonDetails from "../item-details";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import SwapiService from "../../services/swapi-service";
import Row from "../Row/Row";
import ErrorBoundary from "../error-boundary/error-boundary";

export default class PeoplePage extends Component {

    swapi = new SwapiService();

    state = {
        selectedPerson: null,
    }

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        if(this.state.hasError){
            return (
                <ErrorIndicator />
            )
        }

        const itemList = (
            <ItemList
                onItemSelected = {this.onPersonSelect}
                getData = {this.swapi.getAllPeople}
            >
                {(i) =>(
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        )
        const personalDetails = (
            <PersonDetails personId = {this.state.selectedPerson}/>
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personalDetails}/>
            </ErrorBoundary>
        )
    }
}