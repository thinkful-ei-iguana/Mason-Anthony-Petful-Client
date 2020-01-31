import React from 'react';
import './Adoption.css';

export default class Adoption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      dog: [],
      cat: [],
    };
  }
  componentDidMount() {
    this.getDog();
    this.getCat();
  }


  getDog = () => {

  }

  getCat = () => {

  }

  render() {
    const dog = this.state.dog;
    const cat = this.state.cat;

    return (
      <div className='Adoption'>
        <h1>Adoption Process</h1>
        <div className='dog'>
          <h2>Dogs</h2>
          <p>
            <span className='bold'>  Name: </span>{dog.name} <br />
            <span className='bold'>  Breed: </span>{dog.breed} <br />
            <span className='bold'>  Age: </span>{dog.age} <br />
            <span className='bold'>  Sex: </span>{dog.sex} <br />
            <span className='bold'>  Description: </span>{dog.description} <br />
            <span className='bold'>  Story: </span>{dog.story}
          </p>
          <button>Adopt Dog</button>
        </div>

        <div className='cat'>
          <h2>Cats</h2>
          <p>
            <span className='bold'>  Name: </span>{cat.name} <br />
            <span className='bold'>  Breed: </span>{cat.breed} <br />
            <span className='bold'>  Age: </span>{cat.age} <br />
            <span className='bold'>  Sex: </span>{cat.sex} <br />
            <span className='bold'>  Description: </span>{cat.description} <br />
            <span className='bold'>  Story: </span>{cat.story}
          </p>
          <button>Adopt Cat</button>
        </div>

        <div>
          <h3>Place in line</h3>
          queue info goes here
        </div>
      </div>
    );
  }
}
