import React from 'react';
import './SearchPanel.scss';
 
const SearchPanel:React.FC = () => {
 
  return (
    <input type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
    />  
  );
}

export default SearchPanel;
