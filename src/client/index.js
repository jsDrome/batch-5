import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    temp: null,
  };
  fetch = async () => {
    const responseFromServer = await window.fetch('/temperature');
    const actualValue = await responseFromServer.text();

    this.setState({
      temp: actualValue,
    });
  }
  render() {
    return <div>
      <h1>Current Temperature of Berlin</h1>
      <button onClick={this.fetch}>Fetch</button>
      <h2>{this.state.temp && `${this.state.temp} C`}</h2>
    </div>;
  }
}

render(<App />, document.getElementById('root'));