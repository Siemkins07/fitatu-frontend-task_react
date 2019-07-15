import React from 'react';
import '../styles/App.css';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Page from './Page';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  state = {
    employees: [],
    redirect: false,
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

  handleEdit = (employee) => {
    console.log(employee);
    console.log('jest ok');
    this.setState({
      redirect: true
    })
  }

  render() {

    const { employees, redirect } = this.state
    return (
      <Router>
        <div className="App">
          <Navigation />
          <header>
            <Header />
          </header>
          <main>
            <Page employees={employees} edit={this.handleEdit} redirect={redirect} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
