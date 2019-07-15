import React from 'react';
import '../styles/EmployeesListPage.css';

class EmployeeCell extends React.Component {
  state = {
    value: this.props.value,
  }

  update = () => {
    this.props.updateComponentValue(this.state.value)
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { value, isInEditMode, changeEditMode, cancelUpdate, } = this.props

    return (
      <>
        {isInEditMode ?

          <span className='editMode'>
            <input type="text" defaultValue={value} onChange={this.handleChange} />
            <button onClick={cancelUpdate}>X</button>
            <button onClick={this.update}>OK</button>
          </span>
          :
          <span className="defaultMode" onDoubleClick={changeEditMode}>
            {value}
          </span>}
      </>
    )
  }
}

export default EmployeeCell;




