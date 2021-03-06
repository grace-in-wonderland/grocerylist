import React from 'react';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <form id="add-ingredient-form">
            <input type="text" placeholder="Enter Ingredient"/>
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
