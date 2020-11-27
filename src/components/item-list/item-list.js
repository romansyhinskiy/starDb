import React, {Component} from 'react';
import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Loader from '../loader/loader'

export default class ItemList extends Component {

    swapi = new SwapiService();

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.getPersons()
    }

    getPersons() {
        this.swapi.getAllPeople()
            .then(person => {
                this.setState({
                    peopleList: person
                })
            })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li
                    className="list-group-item"
                    id={id}
                    key={name}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            )
        })
    }

    render() {

        const {peopleList} = this.state
        if (!peopleList) {
            return <Loader/>
        }

        const items = this.renderItems(peopleList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
