import React, {Component} from 'react'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../errorIndicator/errorIndicator";

export default class PeoplePage extends Component {

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

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected ={this.onPersonSelect} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}