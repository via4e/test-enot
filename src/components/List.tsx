import React from 'react'
import { ListContext } from '../App'

class List extends React.Component {
    render() {
        return (
            <ListContext.Consumer>
                {value => (
                    <div className="list">
                        <ul>
                            { value ? value.list.map((element, index) => <li key={index}>{element}</li>) : <li></li> }
                        </ul>
                    </div>
                )}
            </ListContext.Consumer>
        )
    }
}

export default List