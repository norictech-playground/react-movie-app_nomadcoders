import React from 'react';
// import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => this.setState(current => ({ count: current.count + 1 })) // use current is a good pratice, current is equal to this.state
  minus = () => this.setState(current => ({ count: current.count > 0 ? current.count - 1 : current.count }))

  render() {
    return <div>
      <h3>Total of number is { this.state.count }</h3>
      <button onClick={ this.add }>Add</button>
      <button onClick={ this.minus }>Minus</button>
    </div>
  }
}

export default App;
