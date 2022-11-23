import React, { useContext } from 'react'
import { ListContext } from '../App'

class List extends React.Component {
    render() {
        return (
            <ListContext.Consumer>
                {list => (
                    <div className="list">
                        wetwe
                    </div>
                )}
            </ListContext.Consumer>
        )
    }
}

//List.contextType = ListContext

export default List