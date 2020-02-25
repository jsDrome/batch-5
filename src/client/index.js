import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    value: 0,
    output: null,
  };
  submit = async () => {
    const currentVal = this.state.value;
    const factorial = await fetch('/factorial?value=' + currentVal);
    const output = await factorial.text();

    this.setState({
      output,
    });
  }
  onInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return <div>
      Number: <input type="text" onChange={this.onInputChange}/>
      <button onClick={this.submit}>Submit</button>
      <h2>{this.state.output}</h2>
    </div>;
  }
}

render(<App />, document.getElementById('root'));