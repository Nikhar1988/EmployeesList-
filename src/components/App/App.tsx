import  { Component } from 'react';

import AppFilter from '../AppFilter/AppFilter';
import AppInfo from '../AppInfo/AppInfo';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';
import EmployeesList from '../EmployeesList/EmployeesList';
import SearchPanel from '../SearchPanel/SearchPanel';

import './App.scss';


export type DataType ={
        name:string,
        salary: string,
        id:number,
        increase: boolean,
}
type StateType = {
    data: DataType[]
}

class App extends Component<{},StateType> {
  constructor(props:{}) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: '800', increase: false, id: 1},
        {name: 'Alex M.', salary: '3000', increase: true, id: 2},
        {name: 'Carl W.', salary: '5000', increase: false, id: 3},
      ]
    } 
      
  }
  maxId = 4

    deleteItem = (id:number) => {
       this.setState(({data})=> ({
         data:data.filter(item => id !== item.id ) 
       })) 
    }

    onAddEmployee = (name:string, salary: string) => {
        this.setState(({data})=> ({
          data: [...data, { name, salary, increase: false, id:this.maxId++}]  
        })) 
    }
    onToggleIncrease = (id:number) => {
      console.log('Increase this ' + id)
      this.setState(({data})=> {
        const index = data.findIndex(item => id === item.id)
        const newItem = {...data[index], increase: !data[index].increase}
        const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)]
        return {
          data: newArr
        }
      }) 
    }
    onToggleRice = (id:number)=> {
      console.log('Rice this ' + id)
    }
   
 
  render() {
    const {data} = this.state;
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
              employees={data}
              onDelete={this.deleteItem}
              onToggleIncrease = {this.onToggleIncrease}
          />
          <EmployeesAddForm onAddEmployee = {this.onAddEmployee}/>
      </div>
    );
  }
}

export default App ;
