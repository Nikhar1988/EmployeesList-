import React from 'react';
import './AppInfo.scss';
 
const AppInfo:React.FC = () => {
 
  return (
    <div className="app-info">
        <h1>Учет сотрудников в компании N</h1>
        <h2>Общее число сотрудников:</h2>
        <h2>Премию получат:</h2>
    </div>
  );
}

export default AppInfo;