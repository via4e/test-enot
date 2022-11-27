import React from 'react'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Context } from '../App'

class Gear extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.close = this.close.bind(this)
    }   

    onChange(ev) {
        this.props.toggleRunning(ev.target.checked)
    }

    close() {
        this.props.toggleSettings(false)
    }

    render() {
        return (
            <Context.Consumer>
                {value => (
                    <div className={ value.settingsVisible ? 'gear' : 'none'}>
                        <span>running string:</span>
                        <Switch defaultChecked={value.runningVisible} onChange={this.onChange.bind(this)} />
                        <Button variant='contained' onClick={this.close}>Close</Button>
                    </div>
                )}
            </Context.Consumer>
        );
    }
}

export default Gear