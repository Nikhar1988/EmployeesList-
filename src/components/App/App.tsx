import  { Component } from 'react';

import AppFilter from '../AppFilter/AppFilter';
import AppInfo from '../AppInfo/AppInfo';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';
import EmployeesList from '../EmployeesList/EmployeesList';
import SearchPanel from '../SearchPanel/SearchPanel';

import './App.scss';

export type TypeFiterType = 'all' | 'moreThen1000' | 'rise';

export type DataType ={
        name:string,
        salary: string,
        id:number,
        increase: boolean,
        rise: boolean,
}
type StateType = {
    data: DataType[],
    filter: TypeFiterType,
    term: string,
     
}

class App extends Component<{},StateType> {
  constructor(props:{}) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: '800', increase: false, rise: false, id: 1},
        {name: 'Alex M.', salary: '3000', increase: true, rise: false, id: 2},
        {name: 'Carl W.', salary: '5000', increase: false, rise: false, id: 3},
      ], 
      filter: 'all',
      term:'', 
    }; 
      
  }
  maxId = 4;

  deleteItem = (id:number) => {
    this.setState(({data})=> ({
      data:data.filter(item => id !== item.id ), 
    })); 
  };

  onAddEmployee = (name:string, salary: string) => {
    this.setState(({data})=> ({
      data: [...data, { name, salary, increase: false, rise: false, id:this.maxId++}],  
    }));     
  };
  onToggleProps = (id:number, prop: string ) => {
    this.setState(({data})=> ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop as keyof DataType]};
        }
        return item;
      }),
    }));
  };
     
  onFilterEmployees = (filter:TypeFiterType)=> {
    this.setState({filter});  
  };

  

  searchEmp = (items:DataType[], term:string ) => {
    if(term.length === 0) return items;

    return items.filter(item => {
      return item.name.includes(term);  
    });
  };

  onUpdateSearch = (term:string) => {
    this.setState({term});
  }; 

  filterEmp = (items:DataType[], filter: string) => {
    switch (filter) {
    case 'rise':
      return items.filter(item => item.rise);
    case 'moreThen1000':
      return items.filter(item => +item.salary > 1000);
    default:
      return items;
    }
  };
 
  render() {
    const {data,  term, filter} = this.state;
    const countEmployees = data.length;
    const countIncreaseEmployees = data.filter(item => item.increase).length;
    const  visibleData = this.filterEmp(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo 
          countEmployees={countEmployees}
          countIncreaseEmployees={countIncreaseEmployees}  />
  
        <div className="search-panel">
          <SearchPanel 
            onUpdateSearch= {this.onUpdateSearch}
            term={term}
          />
          <AppFilter
            onFilterEmployees ={this.onFilterEmployees }
            filter={filter}
          />
        </div>
          
        <EmployeesList 
          employees={visibleData}   
          onDelete={this.deleteItem}
          onToggleProps = {this.onToggleProps}               
        />
        <EmployeesAddForm onAddEmployee = {this.onAddEmployee}/>
      </div>
    );
  }
}

export default App ;
