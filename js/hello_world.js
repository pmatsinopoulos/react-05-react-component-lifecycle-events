class HelloWorld extends React.Component {
  componentWillMount() {
    console.debug('Hello World will mount');
    console.debug('ReactDOM.findDOMNode(this)', ReactDOM.findDOMNode(this));
  }

  componentDidMount() {
    console.debug('HelloWorld component did mount');
    console.dir(ReactDOM.findDOMNode(this));
  }

  render() {
    return React.createElement(
      'h1',
      null,
      'Hello World!'
    );
  }
}