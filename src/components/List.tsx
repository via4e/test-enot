import React from 'react'
import ListElement from './ListElement'
import { todoElement } from '../types'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.todoChecked = this.todoChecked.bind(this)
    }

    todoChecked (...args) {
        console.log('List todoChecked', args)
        this.props.toggleDone({ done: args[0], index: args[1]})
    }

    render() {
        const list: todoElement = this.props.list
        return (
            <div className="list">
                <ul>
                    { list.length ? list.map((item:todoElement, index:number) => 
                        <li key={index}><ListElement toggle={this.todoChecked} index={index} item={item} /></li>) 
                        :
                        <li></li>
                    }
                </ul>
            </div>
        )
    }
}


export default List