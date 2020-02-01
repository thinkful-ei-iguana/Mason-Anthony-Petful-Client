import React from 'react';
import './Adoption.css';

export default class Adoption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      dogs: [],
      cats: [],
    };
  }
  componentDidMount() {
    this.getDogs();
    this.getCats();
  }


  getDogs = () => {

  }

  getCats = () => {

  }

  render() {
    return (
      <div className='Adoption'>
        <h1>Adoption Process</h1>
        <div className='dog'>
          <h2>Dogs</h2>
          dog info here
        </div>

        <div className='cat'>
          <h2>Cats</h2>
          cat info here
        </div>

        <div>
          <h3>Place in line</h3>
          queue info goes here
        </div>
      </div>
    );
  }
}
