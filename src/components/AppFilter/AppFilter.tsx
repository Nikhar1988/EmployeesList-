
import React, { FC } from 'react';

import { TypeFiterType } from '../App/App';
 
import  './AppFilter.scss';
 
type AppFilterProps = {
    onFilterEmployees: ( filter:TypeFiterType) => void,
    filter: TypeFiterType
}
type ButtonsDataType = 
    {
        name:TypeFiterType, 
        label:string
}   

const AppFilter:FC<AppFilterProps> = (props) => {  
  const {filter, onFilterEmployees} = props;
    
  const buttonsData:Array<ButtonsDataType> = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'moreThen1000', label: 'З/П больше 1000$'},
  ];
    
  const buttons = buttonsData.map(({name, label})=> {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button type="button"
        className={`btn ${clazz}`}
        key={name}
        data-atr={name}
        onClick={() => onFilterEmployees(name)}>
        {label}
      </button>
    );
  });
    
  return (
    <div className="btn-group">
      {buttons}
    </div>
  );

};

export default AppFilter;