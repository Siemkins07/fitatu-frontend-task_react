import React from 'react';
import '../styles/EmployeesListPage.css';
import EmployeeCell from './EmployeeCell';

class Employee extends React.Component {
  state = {
    employeeId: this.props.employee.id,
    employeeName: this.props.employee.name,
    employeeAddressStreet: this.props.employee.address.street,
    employeeAddressSuite: this.props.employee.address.suite,
    employeeAddressCity: this.props.employee.address.city,
    employeePhone: this.props.employee.phone,
    employeeEmail: this.props.employee.email,
    isInEditMode: false,
    activeItem: ''
  }

  changeEditMode = (e) => {
    if (!this.state.activeItem) {
      this.setState({
        activeItem: e.target.innerHTML
      })
    }
  }

  updateComponentValue = () => {
    this.setState({
      activeItem: '',
    })
  }

  cancelUpdate = () => this.setState({ activeItem: '', })

  updateId = (newValue) => {
    this.setState({
      activeItem: '',
      employeeId: newValue
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.employeeId}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: this.employeeId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  updateName = (newValue) => {
    this.setState({
      activeItem: '',
      employeeName: newValue
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.employeeName}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: this.employeeName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  updateAddressStreet = (newValue) => {
    this.setState({
      activeItem: '',
      employeeAddressStreet: newValue
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.employeeAddressStreet}`, {
      method: 'PUT',
      body: JSON.stringify({
        address: {
          street: this.employeeAddressStreet
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }


  updateAddressSuite = (newValue) => {
    this.setState({
      activeItem: '',
      employeeAddressSuite: newValue
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.employeeAddressSuite}`, {
      method: 'PUT',
      body: JSON.stringify({
        address: {
          street: this.employeeAddressSuite
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }


  updateAddressCity = (newValue) => {
    this.setState({
      activeItem: '',
      employeeAddressCity: newValue
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.employeeAddressCity}`, {
      method: 'PUT',
      body: JSON.stringify({
        address: {
          street: this.employeeAddressCity
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  updatePhone = (newValue) => {
    this.setState({
      activeItem: '',
      employeePhone: newValue
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.employeePhone}`, {
      method: 'PUT',
      body: JSON.stringify({
        phone: this.employeePhone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  updateEmail = (newValue) => {
    this.setState({
      activeItem: '',
      employeeEmail: newValue
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.employeeEmail}`, {
      method: 'PUT',
      body: JSON.stringify({
        email: this.employeeEmail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {

    return (
      <>
        <EmployeeCell
          changeEditMode={this.changeEditMode}
          isInEditMode={this.state.activeItem == this.state.employeeId}
          updateComponentValue={this.updateId}
          value={this.state.employeeId}
          cancelUpdate={this.cancelUpdate}
        />
        <EmployeeCell
          changeEditMode={this.changeEditMode}
          isInEditMode={this.state.activeItem == this.state.employeeName}
          updateComponentValue={this.updateName}
          value={this.state.employeeName}
          cancelUpdate={this.cancelUpdate}
        />
        <EmployeeCell
          changeEditMode={this.changeEditMode}
          isInEditMode={this.state.activeItem == this.state.employeeAddressStreet}
          updateComponentValue={this.updateAddressStreet}
          value={this.state.employeeAddressStreet}
          cancelUpdate={this.cancelUpdate}
        />
        <EmployeeCell
          changeEditMode={this.changeEditMode}
          isInEditMode={this.state.activeItem == this.state.employeeAddressSuite}
          updateComponentValue={this.updateAddressSuite}
          value={this.state.employeeAddressSuite}
          cancelUpdate={this.cancelUpdate}
        />
        <EmployeeCell
          changeEditMode={this.changeEditMode}
          isInEditMode={this.state.activeItem == this.state.employeeAddressCity}
          updateComponentValue={this.updateAddressCity}
          value={this.state.employeeAddressCity}
          cancelUpdate={this.cancelUpdate}
        />
        <EmployeeCell
          changeEditMode={this.changeEditMode}
          isInEditMode={this.state.activeItem == this.state.employeePhone}
          updateComponentValue={this.updatePhone}
          value={this.state.employeePhone}
          cancelUpdate={this.cancelUpdate}
        />
        <EmployeeCell
          changeEditMode={this.changeEditMode}
          isInEditMode={this.state.activeItem == this.state.employeeEmail}
          updateComponentValue={this.updateEmail}
          value={this.state.employeeEmail}
          cancelUpdate={this.cancelUpdate}
        />
      </>
    )
  }
}

export default Employee;
