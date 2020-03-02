import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    output: null,
  };
  submit = async () => {
    const factorial = await fetch('/soap');
    const output = await factorial.text();
    this.setState({
      output,
    });
  }
  render() {
    return <div>
      <button onClick={this.submit}>Go</button>
      <div dangerouslySetInnerHTML={{ __html: this.state.output }}></div>
    </div>;
  }
}

render(<App />, document.getElementById('root'));