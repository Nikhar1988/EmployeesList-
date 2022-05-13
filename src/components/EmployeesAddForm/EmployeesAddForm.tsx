import React, { Component } from 'react';

import './EmployeesAddForm.scss';

type EmployeesAddFormState = {
    [key:string]: string,  
}

type EmployeesAddFormProps = {
    onAddEmployee: ( name:string, salary: string) => void
}

class EmployeesAddForm extends Component<EmployeesAddFormProps,EmployeesAddFormState> {
  state = {
    name:'',
    salary: '',
        
  };
    
  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    }); 

  };

  onSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAddEmployee(this.state.name, this.state.salary);
    this.setState({
      name:'',
      salary: '',
    });
  };



  render() {
    const {name, salary} = this.state;
        
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form 
          className="add-form d-flex"
          onSubmit={this.onSubmit}
        >
          <input type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?" 
            onChange ={this.onValueChange}
            name="name" 
            value ={name}    
          />
          <input type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?" 
            onChange ={this.onValueChange} 
            name="salary"
            value={salary}
          />
    
          <button type="submit"
            className="btn btn-outline-light"                                      
          >Добавить</button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;