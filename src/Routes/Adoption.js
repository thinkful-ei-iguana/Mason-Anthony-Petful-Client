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

  deleteDog = () => {
    DogHelper.deleteDog();
    this.deletePerson();
  }

  getCat = () => {
    CatHelper.getCat()
      .then(res => res.json())
      .then(cat => this.setState({ cat }))
      .catch((error) => {
        this.setState({ error })
      })
  }

  deleteCat = () => {
    CatHelper.deleteCat();
    this.deletePerson();
  }

  getQueue = () => {
    PeopleHelper.getQueue()
      .then(res => res.json())
      .then(queue => this.setState({ queue, isLoading: false }))
      .catch((error) => {
        this.setState({ error })
      })
  }

  deletePerson = () => {
    PeopleHelper.deletePerson();
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
            <div>
              <span className='animalPic'></span><img className='picture' src={dog.image} alt='puppy' /> <br />
              <span className='bold'>  Name: </span>{dog.name} <br />
              <span className='bold'>  Breed: </span>{dog.Breed} <br />
              <span className='bold'>  Age: </span>{dog.Age} <br />
              <span className='bold'>  Sex: </span>{dog.Sex} <br />
              <span className='bold'>  Description: </span><p className='desc'>{dog.Description}</p> <br />
              <span className='bold'>  Story: </span><p className='desc'>{dog.Story}</p>
            </div>
            <button onClick={this.deleteDog()}>Adopt Dog</button>
          </div>

          <div className='cat'>
            <h2>Cat</h2>
            <div>
              <span className='animalPic'></span><img className='picture' src={cat.image} alt='kitty' /> <br />
              <span className='bold'>  Name: </span>{cat.name} <br />
              <span className='bold'>  Breed: </span>{cat.Breed} <br />
              <span className='bold'>  Age: </span>{cat.Age} <br />
              <span className='bold'>  Sex: </span>{cat.Sex} <br />
              <span className='bold'>  Description: </span><p className='desc'>{cat.Description}</p> <br />
              <span className='bold'>  Story: </span><p className='desc'>{cat.Story}</p>
            </div>
            <button onClick={this.deleteCat()}>Adopt Cat</button>
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
