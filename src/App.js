import React from 'react';
import './App.css';
import ListItems from './components/ListItems.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
    }
    
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== "") {
      this.setState({
        items: [...this.state.items, newItem],
        currentItem: { text: '',  key: '' }
      })
    }
  }

  deleteItem(key) {
    this.setState({
      items: this.state.items.filter( item => item.key !== key )
    })
  }

  handleInput(e) {
    this.setState({
      currentItem: { text: e.target.value, key: Date.now() }
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="add-ingredient-form" onSubmit={this.addItem}>
            <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} placeholder="Enter Ingredient"/>
            <button type="submit">Add</button>
          </form>
        </header>
         <ListItems items={this.state.items} deleteItem={this.deleteItem}></ListItems>
      </div>
    );
  }
}

export default App;
