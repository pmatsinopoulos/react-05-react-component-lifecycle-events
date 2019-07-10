class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    console.log('Users component did mount');
    fetch('http://fakedata.techcareerbooster.com/api/exercises_and_code/students').then(response => response.json()).then(jsonData => {
      console.dir(jsonData['results']);
      this.setState({ students: jsonData['results'].map(item => ({ 'id': item['id'], 'name': item['name'] })) });
    });
  }

  render() {
    return React.createElement(
      'table',
      null,
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            { colSpan: '2' },
            'Users'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'ID'
          ),
          React.createElement(
            'th',
            null,
            'Name'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        this.state.students.map(item => {
          return React.createElement(
            'tr',
            { key: item['id'] },
            React.createElement(
              'td',
              null,
              item['id']
            ),
            React.createElement(
              'td',
              null,
              item['name']
            )
          );
        })
      )
    );
  }
}