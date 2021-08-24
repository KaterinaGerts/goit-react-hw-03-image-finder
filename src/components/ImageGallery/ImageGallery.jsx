import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {ImageGalleryItem} from 'components/ImageGalleryItem';
//import fetchImages from '../services/card-api';

export class  ImageGallery extends Component  {
  state = {
    cards: [],   
    error: false,
    status: 'idle',
 }

 componentDidUpdate(prevProps, prevState) {
  const prevName = prevProps.cardName;
  const nextName = this.props.cardName;

  if(prevName !== nextName) {
   this.setState({status: 'pending'});

  // fetchImages.then()
    
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
        {cards.map(({id, webformatURL, tags}) => {
         return <ImageGalleryItem id={id} image={webformatURL} alt={tags}/>
        })}        
    </ul>);
  }  
 
}
}

ImageGallery.propTypes = {};


