class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    console.log('Users component did mount')
    fetch('http://fakedata.techcareerbooster.com/api/exercises_and_code/students').
      then(response => response.json()).
      then(jsonData => {
        console.dir(jsonData['results'])
        this.setState({students: jsonData['results'].map(item => ({'id': item['id'], 'name': item['name']}))})
    })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="2">Users</th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {this.state.students.map((item) => {
          return (
            <tr key={item['id']}>
              <td>{item['id']}</td>
              <td>{item['name']}</td>
            </tr>
          )
        })
        }
        </tbody>
      </table>
    )
  }
}