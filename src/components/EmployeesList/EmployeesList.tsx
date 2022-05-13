
import React from 'react';

import { DataType } from '../App/App';
import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';
import './EmployeesList.scss';



   

type EmployeesListType = {
    employees: DataType[],
    onDelete: (id: number) => void,
    onToggleProps: (id:number, prop:string) => void,
    onChangeSalary: (id: number, changeSalary: string) => void;
}

const EmployeesList:React.FC<EmployeesListType> = ({employees, onDelete, onToggleProps, onChangeSalary }):JSX.Element => {
  return (
    <ul className="app-list list-group">
      {employees.map(({id, ...emp}) => (
        <EmployeesListItem 
          {...emp} 
          key={id} 
          onDelete = {() => onDelete(id)}
          onToggleProps = {(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle') as string)}
          onChangeSalary = {(e)=> onChangeSalary(id, e.currentTarget.value)}   
          
        />
                
      ))}             
    </ul>
  );
};

export default EmployeesList;