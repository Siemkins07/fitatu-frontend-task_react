import React from 'react';
import '../styles/EditColumn.css';
import { Redirect } from 'react-router-dom';

const EditColumn = (props) => {
  return (
    <>
      <span className='editColumn' onClick={props.edit}>Edit</span>
      {props.redirect ? <Redirect to='/inprogress' /> : null}
    </>
  );
}

export default EditColumn;