import React from 'react';
import './Adoption.css';
import PeopleHelper from './RouteHelpers/PeopleHelper';
import DogHelper from './RouteHelpers/DogHelper';
import CatHelper from './RouteHelpers/CatHelper';

export default class Adoption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      dog: [],
      cat: [],
      queue: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.getDog();
    this.getCat();
    this.getQueue();

  }


  getDog = () => {
    DogHelper.getDog()
      .then(res => res.json())
      .then(dog => this.setState({ dog }))
      .catch((error) => {
        this.setState({ error })
      })
  }

  getCat = () => {
    CatHelper.getCat()
      .then(res => res.json())
      .then(cat => this.setState({ cat }))
      .catch((error) => {
        this.setState({ error })
      })
  }

  getQueue = () => {
    PeopleHelper.getQueue()
      .then(res => res.json())
      .then(queue => this.setState({ queue, isLoading: false }))
      .catch((error) => {
        this.setState({ error })
      })
  }

  display = (q) => {
    let str = '';
    let currNode = q.first
    while (currNode !== null) {
      str += currNode.value.name + ', ';
      currNode = currNode.next;
    }
    return (str);
  }

  Loading = () => {
    return this.state.isLoading ? (
      <h3 className='Loading'>Loading...</h3>
    ) : (
        this.display(this.state.queue)
      );
  };

  render() {
    const dog = this.state.dog;
    const cat = this.state.cat;


    return (
      <div className='Adoption'>
        <h1>Petful Adoption</h1>
        <div className='animals'>
          <div className='dog'>
            <h2>Dog</h2>
            <p>
              <span className='animalPic'></span><img className='picture' src={dog.image} alt='puppy' /> <br />
              <span className='bold'>  Name: </span>{dog.name} <br />
              <span className='bold'>  Breed: </span>{dog.Breed} <br />
              <span className='bold'>  Age: </span>{dog.Age} <br />
              <span className='bold'>  Sex: </span>{dog.Sex} <br />
              <span className='bold'>  Description: </span><div className='desc'>{dog.Description}</div> <br />
              <span className='bold'>  Story: </span><div className='desc'>{dog.Story}</div>
            </p>
            <button>Adopt Dog</button>
          </div>

          <div className='cat'>
            <h2>Cat</h2>
            <p>
              <span className='animalPic'></span><img className='picture' src={cat.image} alt='kitty' /> <br />
              <span className='bold'>  Name: </span>{cat.name} <br />
              <span className='bold'>  Breed: </span>{cat.Breed} <br />
              <span className='bold'>  Age: </span>{cat.Age} <br />
              <span className='bold'>  Sex: </span>{cat.Sex} <br />
              <span className='bold'>  Description: </span><div className='desc'>{cat.Description}</div> <br />
              <span className='bold'>  Story: </span><div className='desc'>{cat.Story}</div>
            </p>
            <button>Adopt Cat</button>
          </div>
        </div>
        <div className='queue'>
          <h3>Place in line</h3>
          {this.Loading()}
        </div>
      </div>
    );
  }
}
