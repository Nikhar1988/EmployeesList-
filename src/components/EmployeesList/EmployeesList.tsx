import { ReactElement } from 'react';
import { TextSpan } from 'typescript';
import { DataType } from '../App/App';
import EmployeesListItem, { EmployeesListItemProps } from '../EmployeesListItem/EmployeesListItem';
import './EmployeesList.scss'



   

type EmployeesListType = {
    employees: DataType[],
    onDelete: (id: number) => void,
    onToggleIncrease: (id:number) => void
}

const EmployeesList:React.FC<EmployeesListType> = ({employees, onDelete, onToggleIncrease }):JSX.Element => {
    return (
        <ul className="app-list list-group">
            {employees.map(({id, ...emp}) => (
                <EmployeesListItem 
                {...emp} 
                key={id} 
                onDelete = {() => onDelete(id)}
                onToggleIncrease = {() => onToggleIncrease(id)}
                />
                
            ))}             
        </ul>
    )
}

export default EmployeesList;