class Content extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      counter: 0,
      currentTime: this.getCurrentTimeAsString()
    };
  }

  getCurrentTimeAsString() {
    return new Date().toLocaleString();
  }

  launchClock() {
    setInterval(() => {
      this.setState({
        counter: ++this.state.counter,
        currentTime: this.getCurrentTimeAsString()
      });
    }, 1000);
  }

  render() {
    if (this.state.counter > 2) return null;
    return React.createElement(Logger, { time: this.state.currentTime });
  }
}