import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  onAdopt = () => {
    const { history } = this.props;
    history.push('/Adoption');
  };

  render() {
    return (
      <div>
        <header>
          <h1>Petful</h1>
        </header>

        <p className='intro'>
          Hello and welcome to Petful! If you are here to adopt a pet, then you
          are in the right place! If you are new, here's how it works: The
          adoption process is on a first come first serve basis so there may be
          a wait, but you will be able to see where you are in line. Once it is
          your turn to adopt you will be presented with 2 animals, a cat and a
          dog. You can adopt the cat, the dog or both! The 2 animals that you
          will be presented with are a cat and a dog that have been here the
          longest. We do this to ensure that animals find a home as quick as
          possible. If you would like 2 of the same animal then you will have to
          adopt one and wait in line until it is your turn again to adopt.
        </p>

        <button type='click' className='adopt-button' onClick={this.onAdopt}>
          Start Adoption Process
        </button>
      </div>
    );
  }
}

export default Home;
