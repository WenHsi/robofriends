import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
    console.log(props);
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Ooooops.
          <br /> That is not good.
        </h1>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
