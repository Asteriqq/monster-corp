import { Component } from 'react';

import Card from '../Card/Card.component.jsx';
import './card-list.styles.css';

class CardList extends Component {
    render() {
        console.log('render from Cardlist');

        const {monsters} = this.props;

        return(
            <div className='card-list'>
                {monsters.map((monster) => {
                    return(
                    <Card monster={monster} />
                )})}
            </div>
        )
    }
}

export default CardList;