import React, {Component} from 'react'

class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state = {
        hasError: false,
        errorInfo: null,
    };
  }

  static getDerivedStateFromError(error){
    return{hasError: true};
  }

  componentDidCatch(error, errorInfo){
    this.setState({errorInfo});
    console.log("error caught by error boundary:", error);
  }
  render(){
    if(this.state.hasError){
        <h2>Something Went Wrong</h2>
    }
    return this.props.children;
  }
}

export default ErrorBoundary



/*

catches: Error thrown during rendering(during mounting).

doesn't catch: Error in Event Handlers(e.g. onClick, onSubmit, etc.)

Error during async operations(e.g. fetch)
use try - catch

*/