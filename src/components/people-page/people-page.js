import React, {Component} from 'react'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import SwapiService from "../../services/swapi-service";
import Row from "../Row/Row";

export default class PeoplePage extends Component {

    swapi = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false
    }

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

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
            <Row left={itemList} right={personalDetails}/>
        )
    }
}