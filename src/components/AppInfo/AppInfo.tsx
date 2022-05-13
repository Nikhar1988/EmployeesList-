import React, { Component } from 'react';
import './AppInfo.scss';
 
type CountEmployeesProps = {
  countEmployees: number,
  countIncreaseEmployees: number
}

class AppInfo extends Component<CountEmployeesProps,{}> {
  render() {
    const {countEmployees, countIncreaseEmployees} = this.props;
    return (
      <div className="app-info">
        <h1>Учет сотрудников в компании N</h1>
        <h2>Общее число сотрудников: {countEmployees}</h2>
        <h2>Премию получат: {countIncreaseEmployees}</h2>
      </div>
    );
  }
  
}

export default AppInfo;
