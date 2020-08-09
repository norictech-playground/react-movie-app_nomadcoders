import React from 'react';
import PropTypes from 'prop-types'

const foods = [
  { name: "Chicken", },
  { name: "Stick", },
  { name: "Beaf", },
  { name: "Noodle", },
]

function Food({ name }) {
  return (
    <h3>{ name }</h3>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired
}

const renderFood = (food) => {
  return <Food key={ food.name } name={ food.name } />
}

function App() {
  return (
    <div>
      { foods.map(renderFood) }
    </div>
  );
}

export default App;
