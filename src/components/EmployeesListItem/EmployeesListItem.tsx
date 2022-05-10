import { Component, ReactElement } from 'react'
import './EmployeesListItem.scss';

type EmployeesListItemState = {
    increase: boolean,
    like: boolean
}

export type EmployeesListItemProps = {
    name: string,
    salary: string,
    onDelete: ()=> void,
    onToggleIncrease: () => void,
    increase: boolean
};



class EmployeesListItem extends Component<EmployeesListItemProps,EmployeesListItemState> {
    state = {
        increase: false,
        like: false
    }

    onLike = () => {
        this.setState((state) => ({
            like: !state.like 
        }))
    }

    
    render() {
    const {name, salary, onDelete, onToggleIncrease, increase} = this.props;
    const { like} = this.state;
    let classNames ='list-group-item d-flex justify-content-between';
    if(increase) {classNames += ' increase'};    
    if(like) {classNames += ' like'}; 
        return (
            <li className={classNames}>
                <span 
                    className="list-group-item-label"
                    onClick={this.onLike}
                >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        type="button"
                        className="btn-cookie btn-sm" 
                        onClick={onToggleIncrease}
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
        )
    }
    
}

export default EmployeesListItem;