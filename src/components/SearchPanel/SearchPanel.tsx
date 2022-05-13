import React, {  FC } from 'react';
import './SearchPanel.scss';
 
type SearchPanelProps = {
  onUpdateSearch: (term:string)=> void,
  term: string
}

const SearchPanel:FC<SearchPanelProps> =({onUpdateSearch, term}) => {
  
  const updateSearch = (e: React.FormEvent<HTMLInputElement>) => {
    onUpdateSearch(e.currentTarget.value); 
  };

  return (
    <input type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={term}
      onChange={updateSearch}
    />  
  );
   
};

export default SearchPanel;
