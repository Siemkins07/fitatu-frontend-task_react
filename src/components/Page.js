import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EmployeesListPage from '../pages/EmployeesListPage';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage'
import ContactPage from '../pages/ContactPage'
import FaqPage from '../pages/FaqPage'
import AdminPage from '../pages/AdminPage';

const Page = (props) => {
  return (

    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about_us" component={AboutUsPage} />
        <Route path="/employees" render={() => (< EmployeesListPage {...props} employees={props.employees} edit={props.edit} redirect={props.redirect} edit_record={props.edit_record} />)} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </>
  );
}

export default Page;