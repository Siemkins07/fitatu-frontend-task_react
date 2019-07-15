import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import EmployeesListPage from '../pages/EmployeesListPage';


class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    const API = 'https://jsonplaceholder.typicode.com/users'
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error('niepowodzenie')
      })
      .then(response => response.json())
      .then(result => {
        this.setState({
          employees: result,
        })
      })
  }

  // handleEdit = (employee) => {
  //   console.log(employee);
  //   console.log('jest ok');
  //   this.setState({
  //   })
  // }

  render() {

    const { employees } = this.state
    return (

      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <EmployeesListPage employees={employees} edit={this.handleEdit} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
