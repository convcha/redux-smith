import commander from "commander";
import mypackage from "../package.json"
import React, {Component} from 'react';
import {render, Color} from 'ink';

commander
  .version(mypackage.version, '-v, --version')
  .parse(process.argv);

class Counter extends Component<any, any> {
  timer: any;

  constructor(props: any) {
    super(props);

    this.state = {
      i: 0
    };
  }

  render() {
    return (
      <Color green>
        {this.state.i} tests passed
      </Color>
    );
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

render(<Counter/>);
