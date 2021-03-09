import React from 'react';
import './App.css';
import ListItems from './components/ListItems.js';
import QuickAdd from './components/QuickAdd.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
    }

    this.addItem = this.addItem.bind(this);
    this.addItems = this.addItems.bind(this);
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

  addItems(e) {
    e.preventDefault();
    const list = e.target.value.split(", ");
    //  let newItems = list.map( item => { text: item, key: Date.now()} );
    let newItems = [];
    let i;
    for(i=0; i < list.length; i++) {
      let item = {text: list[i], key: Date.now()+i};
      newItems = [...newItems, item];
    }

      this.setState({
        items: [...this.state.items, ...newItems],
      })
  }

  deleteItem(key) {
    this.setState({
      items: this.state.items.filter( item => item.key !== key )
    })
  }

  handleInput(e) {
    this.setState({
      currentItem: { text: e.target.value, key: Date.now()}
    })
  }

  render() {
    return (
    <div>
      <div className="App">
        <header>
          <form id="add-ingredient-form" onSubmit={this.addItem}>
            <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} placeholder="Enter Ingredient"/>
            <button type="submit">Add</button>
          </form>
        </header>
         <ListItems items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
      <div className="QuickAdd"> <QuickAdd addItemsFunction={this.addItems}/></div>
    </div>
    );
  }
}

export default App;
