import React from 'react'
import Switch from '@mui/material/Switch';
import { todoElement } from '../types'

class ListElement extends React.Component<todoElement> {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }    

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

    state = {
        checked: false
    };

    onChange(ev) {
        console.log('ListElement', ev.target.checked, this.props.index)
        this.props.toggle(ev.target.checked, this.props.index)
    }

    render() {
        const { header, text, done } = this.props.item
        const { index } = this.props.index
        const label = { inputProps: { 'aria-label': 'Switch demo' } };
        const leftColor = {
            backgroundColor: this.getRandomColor('56789ABCDEF')
        }

        return (
            <div className='todo'>
                <div className='left' style={leftColor}></div>
                <div className='todo-card'>
                    <div className={done ? 'header-strike' : 'header'}>{ header.length < 19 ? header : this.truncate(header, 19) }</div>
                    <div className='text'>{ text.length < 37 ? text : this.truncate(text, 30) }</div>
                </div>
                <div className='switch'>
                    <Switch {...label} defaultChecked={done} onChange={this.onChange.bind(this)}  />
                </div>
            </div>
        )
    }
}

export default ListElement