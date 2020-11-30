import React, {Component} from 'react';
import './item-list.css';
import Loader from '../loader/loader'

export default class ItemList extends Component {

    state = {
        listItem: null
    };

    componentDidMount() {

        const { getData } = this.props;

        getData()
            .then((listItem) => {
                this.setState({
                    listItem
                });
            });
    }


    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.children(item);
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
                </li>
            )
        })
    }

    render() {
        const {listItem} = this.state

        if (!listItem) {
            return <Loader/>
        }

        const items = this.renderItems(listItem)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
