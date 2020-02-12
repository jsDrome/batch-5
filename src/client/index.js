import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    count: 10,
  };
  increment = () => {
    const currentValue = this.state.count;

    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentValue + 1,
    });
  }
  render() {
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>+</button>
      <button>-</button>
    </div>;
  }
}

render(<App />, document.getElementById('root'));