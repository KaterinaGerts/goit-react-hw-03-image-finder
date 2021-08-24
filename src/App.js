import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Container} from 'components/Container';
import {Searchbar} from 'components/Searchbar';
import {ImageGallery} from 'components/ImageGallery';


export class App extends Component {
  state = {   
    cardName: '',
  }

  handleFormSubmit = cardName => {
    this.setState({ cardName });
  };

  render() {
    return (
      <Container>
        <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery cardName={this.state.cardName}/>
        <ToastContainer autoClose={3000}/>
        </div>
      </Container>
      
    )
  }
}

export default App

