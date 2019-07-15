import React from 'react';
import '../styles/EmployeesListPage.css';
import Employee from '../components/Employee';

const EmployeesListPage = (props) => {

  const employees = props.employees.map(employee => (
    <Employee key={employee.id} employee={employee} />
  ))

  return (
    <>
      <h3 className='employessList__title'>Employees List</h3>
      <div className='employeesList'>
        <span>
          <strong>Id</strong>
        </span>
        <span>
          <strong>Name</strong>
        </span>
        <span className="address">
          <strong>Address</strong>
        </span>
        <span>
          <strong>Phone</strong>
        </span>
        <span>
          <strong>Email</strong>
        </span>
        {employees}
      </div>
    </>
  )
}

export default EmployeesListPage;