import React from 'react';
import './QuickAdd.css';

function QuickAdd(props) {
  return(
    <div>
    <h2 className="food-categories">Category Name Here</h2>
      <button value="2 Cans of Black Beans, Okra, Cajun Sausage, Rice" onClick={props.addItemsFunction}>Beans & Rice</button>
      <button value="Fish Sticks, Fresh Corn, Colesaw Mix, Tortillas" onClick={props.addItemsFunction}>Fish Tacos</button>
      <button value="Sausage, Tortillas, Avocados, Tomatoes, Corn" onClick={props.addItemsFunction}>Sausage Tacos</button>
      <button value="Chicken, Rice" onClick={props.addItemsFunction}>Chicken Terriaki</button>
      <button value="Pork, Rice" onClick={props.addItemsFunction}>Pork Belly</button>
      <button value="Chicken Wings, BBQ Sauce, Sweet Potatoes" onClick={props.addItemsFunction}>Smoked Wings</button>
      <button value="Veggie Burgers, Tomatoes, Lettuce, Bread" onClick={props.addItemsFunction}>Veggie Burgers</button>
      <button value="Tofu, Peanut Butter, Mushrooms, other veggies" onClick={props.addItemsFunction}>Tofu Stir Fry</button>
      <button value="Bell Pepper, Rice, Sauces" onClick={props.addItemsFunction}>Fried Rice</button>

      <h2 className="food-categories">Warm Weather Foods</h2>
      <button value="Tuna, Avocados, Corn, Rice" onClick={props.addItemsFunction}>Poke Bowl</button>
      <button value="Soba Noodles, Seaweed" onClick={props.addItemsFunction}>Soba</button>
      <button value="Salad Mix, Taco pack, Ground Beef" onClick={props.addItemsFunction}>Taco Salad</button>
      <button value="Baguette, Meat, Pickled Carrot" onClick={props.addItemsFunction}>Banh Mi</button>

      <h2 className="food-categories">Cold Weather Foods</h2>
      <button value="Potatoes, Ground Beef, Frozen Veggie Mix, Bell Peppers" onClick={props.addItemsFunction}>Shepherds Pie</button>
      <button value="Carrots, Potatoes, Chicken, Chicken Broth" onClick={props.addItemsFunction}>Chicken Curry</button>
      <button value="Green Onion, Tofu, Beef, Mushrooms, Corn" onClick={props.addItemsFunction}>Hot Pot</button>
      <button value="Canned Pumpkin, Fresh Corn, Canned Diced Tomatoes, Veggie Meat" onClick={props.addItemsFunction}>Vegetarian Chili</button>
      <button value="Baby Kale, Minced Carrots, Corn, Chicken Broth" onClick={props.addItemsFunction}>Cure All Soup</button>
      <button value="Okra, Sausage" onClick={props.addItemsFunction}>Gumbo</button>
      <button value="Red Meso, Napa Cabbage, Salmon" onClick={props.addItemsFunction}>Salmon & Meso Soup</button>
      <button value="Broccoli, Cheddar" onClick={props.addItemsFunction}>Cheddar Broccoli Soup</button>
    </div>
  )
}

export default QuickAdd;
