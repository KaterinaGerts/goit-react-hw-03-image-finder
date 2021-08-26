import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import cardsApi from './services/card-api';
import Spinner from 'components/Loader';
import Modal from 'components/Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    cardName: '',
    cards: [],
    error: false,
    status: Status.IDLE,
    page: 1,
    isShow: false,
    modalImage: '',
  };

  handleFormSubmit = cardName => {
    this.setState(cardName);
    this.setState({ cards: [] });
    this.setState({ page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevCard = prevState.cardName;
    const nextCard = this.state.cardName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevCard !== nextCard || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      cardsApi
        .fetchImages(nextCard, nextPage)
        .then(
          cards =>
            this.setState(prevState => {
              return {
                cards: [...prevState.cards, ...cards],
                status: Status.RESOLVED,
              };
            }),
          setTimeout(
            () =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
              }),
            2000,
          ),
        )
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  incrementPage = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  toggleModal = modalImage => {
    this.setState(({ isShow }) => ({
      isShow: !isShow,
    }));
    this.setState({ modalImage });
  };

  render() {
    const { cards, error, status, isShow, modalImage } = this.state;

    return (
      <Container>
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
          {status === Status.IDLE && <div>Please, write a card name!</div>}
          {status === Status.PENDING && <Spinner />}
          {status === Status.REJECTED && <h1>{error.message}</h1>}
          {status === Status.RESOLVED && (
            <ImageGallery
              cards={cards}
              onClick={this.incrementPage}
              onImageClick={this.toggleModal}
            />
          )}
          {isShow && (
            <Modal modalImage={modalImage} onClose={this.toggleModal} />
          )}
          <ToastContainer autoClose={3000} />
        </div>
      </Container>
    );
  }
}

export default App;
