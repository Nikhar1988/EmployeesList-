import React, { FC } from 'react';

import './EmployeesListItem.scss';

export type EmployeesListItemProps = {
    name: string,
    salary: string,
    onDelete: ()=> void,
    onToggleProps: ( e:React.SyntheticEvent) => void,
    increase: boolean,
    rise: boolean,
    onChangeSalary: (e:React.FormEvent<HTMLInputElement>)=> void;  
};



const EmployeesListItem:FC<EmployeesListItemProps> = (props) => {
   
  const {name, salary, onDelete, onToggleProps, increase,  rise, onChangeSalary} = props;
    
  let classNames ='list-group-item d-flex justify-content-between';
  if(increase) {classNames += ' increase';};    
  if(rise) {classNames += ' like';}; 
        
  return (
    <li className={classNames}>
      <span 
        className="list-group-item-label"
        onClick={onToggleProps}
        data-toggle="rise"
      >{name}</span>
      <div>
        <input 
          type="text" 
          className="list-group-item-input" 
          onChange={onChangeSalary}   
          defaultValue={salary}
          onKeyDown={(event)=> {
            if(event.key === 'Enter') {
              event.currentTarget.blur();
            }
          }}
        />
        <span>$</span>
      </div>
      
      <div className="d-flex justify-content-center align-items-center">
        <button 
          type="button"
          className="btn-cookie btn-sm" 
          data-toggle="increase"
          onClick={onToggleProps}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm "
          onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};
    
export default EmployeesListItem;