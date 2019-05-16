import React from 'react';

class Animals extends React.Component {
  state = {
    animals: [
      {name: "mark as read"},
      {name: "mark as red"},
   
     ] // the initial list
  };

  onAnimalClick = e => {
    const { animals } = this.state; // current list
    const index = e.target.dataset.index; // the index of the clicked item
    const [clicked] = animals.splice(index, 1); // extract the item and delete it from the array

    this.setState({
      animals: [...animals, clicked] // add the clicked item to the end
    });
  };

  render() {
    const { animals } = this.state;

    return animals.map((a, i) => (
      <div onClick={this.onAnimalClick} data-index={i}>
        {a.name}
      </div>
    ));
  }
}

export default Animals;