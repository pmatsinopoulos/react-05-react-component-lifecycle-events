class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      currentTime: this.getCurrentTimeAsString()
    }
  }

  getCurrentTimeAsString() {
    return (new Date()).toLocaleString()
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({counter: ++this.state.counter, currentTime: this.getCurrentTimeAsString()})
    }, 1000)
  }

  render() {
    return (
      <h1>{this.state.currentTime}</h1>
    )
  }
}
