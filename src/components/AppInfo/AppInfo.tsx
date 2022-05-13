import React, {  FC } from 'react';
import './AppInfo.scss';
 
type CountEmployeesProps = {
  countEmployees: number,
  countIncreaseEmployees: number
}

const AppInfo:FC<CountEmployeesProps> =(props) => {
  const {countEmployees, countIncreaseEmployees} = props;
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {countEmployees}</h2>
      <h2>Премию получат: {countIncreaseEmployees}</h2>
    </div>
  );
};

export default AppInfo;
