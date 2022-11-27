import React from 'react'
import { ListContext } from '../App'
import { todoElement } from '../types'
import ListElement from './ListElement'

class List extends React.Component {

    render() {
        return (
            <ListContext.Consumer>
                {value => (
                    <div className="list">
                        <ul>
                            { value ? value.list.map( (element, index) => <li key={index}><ListElement todoElement={ element } /></li> ) : <li></li> }
                        </ul>
                    </div>
                )}
            </ListContext.Consumer>
        )
    }
}

export default List