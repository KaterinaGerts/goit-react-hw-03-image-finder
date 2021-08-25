import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {ImageGalleryItem} from 'components/ImageGalleryItem';
import cardsApi from '../../services/card-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class  ImageGallery extends Component  {
  state = {
    cards: [],   
    error: false,
    status: Status.IDLE,
 }

  componentDidUpdate(prevProps, prevState) {
  const prevCards = prevProps.cardName;
  const nextCards = this.props.cardName;  

  if(prevCards !== nextCards) {
   this.setState({status: Status.PENDING});

   cardsApi
  .fetchImages(nextCards)
  .then(card => this.setState({ card, status: Status.RESOLVED }))
  .catch(error => this.setState({ error, status: Status.REJECTED }));
    
  }
}

render() {
  const {cards, error, status} = this.state;    

  if(status === 'idle') {
    return <div>Please, write a card name!</div>;
  }
  
  if(status === 'pending') {
    return <div>Loading...</div>;
  }

  if(status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if(status === 'resolved') {
    return (
    <ul className="ImageGallery">
        {cards.map(card => {
         return <ImageGalleryItem cards={card}/>
        })}        
    </ul>);
  }  
 
}
}

//ImageGallery.propTypes = {};


