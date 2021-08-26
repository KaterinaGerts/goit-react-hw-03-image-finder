import React, { Component } from 'react';
import {  toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    cardName: '',
  }

  handleChange = e => {  
    const value = e.currentTarget.value;  
    this.setState({ cardName: value.toLowerCase() });
  };

  handleSubmit =e => {
    e.preventDefault();

    const {cardName} = this.state

    if(cardName.trim() === '') {
      toast.error("Oh no, you didn't write your request!");
      return;
    }
    this.props.onSubmit({cardName});    
    this.reset();
  };

  reset = () => {
    this.setState({cardName: ''});
  };

  render() {
    const { cardName } = this.state;
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              name="name"
              value={cardName}
              onChange={this.handleChange} 
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;