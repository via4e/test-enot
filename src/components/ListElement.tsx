import React from 'react'
import Switch from '@mui/material/Switch';
import { todoElement } from '../types'

class ListElement extends React.Component<todoElement> {

    truncate (str: string, symbols: number) {
        return str.length > 10 ? str.substring(0, symbols) + "..." : str;
    }

    getRandomColor = (pallete: string) => {
        // full pallete -> '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += pallete[Math.floor(Math.random() * pallete.length)]
        }
        return color
    }

    render() {
        const { header, text, done } = this.props.todoElement
        const label = { inputProps: { 'aria-label': 'Switch demo' } };
        const leftColor = {
            backgroundColor: this.getRandomColor('56789ABCDEF')
        }
        return (
            <div className='todo'>
                <div className='left' style={leftColor}></div>
                <div className='todo-card'>
                    <div className={done ? 'header-strike' : 'header'}>{ this.truncate(header, 20) }</div>
                    <div className='text'>{ this.truncate(text, 40) }</div>
                </div>
                <div className='switch'>
                    <Switch {...label} defaultChecked={done} />
                </div>
            </div>
        )
    }
}

export default ListElement