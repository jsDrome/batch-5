import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    value: 0,
  };
  submit = async () => {
    const currentVal = this.state.value;
    const factorial = await fetch('/factorial?value=' + currentVal);
    this.setState({
      value: factorial,
    });
  }
  onInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return <div>
      Number: <input type="text" onChange={this.onInputChange} value={this.state.value}/>
      <button onClick={this.submit}>Submit</button>
    </div>;
  }
}

render(<App />, document.getElementById('root'));