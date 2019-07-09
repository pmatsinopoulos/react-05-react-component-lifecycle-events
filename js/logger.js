class Logger extends React.Component {
  constructor(props) {
    super(props);
    console.debug('contructor');
  }

  componentWillMount() {
    console.debug('logger will mount');
  }

  componentDidMount() {
    console.debug('logger did mount');
    console.dir(ReactDOM.findDOMNode(this));
  }

  componentWillReceiveProps(newProps) {
    console.debug('logger component will receive props');
    console.debug('...newProps');
    console.dir(newProps);
  }

  shouldComponentUpdate(newProps, newState) {
    console.debug('shouldComponentUpdate is triggered');
    console.debug('newProps', newProps);
    console.debug('newState', newState);
    return true;
  }

  componentWillUpdate(newProps, newState) {
    console.debug('componentWillUpdate is triggered');
    console.debug('newProps', newProps);
    console.debug('newState', newState);
  }

  componentDidUpdate(oldProps, oldState) {
    console.debug('componentDidUpdate is triggered');
    console.debug('oldProps', oldProps);
    console.debug('oldState', oldState);
  }

  componentWillUnmount() {
    console.debug('componentWillUnmount');
  }

  render() {
    return React.createElement(
      'span',
      null,
      this.props.time
    );
  }
}