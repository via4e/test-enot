import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.settingsVisible = this.settingsVisible.bind(this)
    }

    settingsVisible () {
        this.props.toggleSettings(true)
    } 

    render() {
        return (
            <div className="header-app">
                <div>ToDo</div>
                <div onClick={this.settingsVisible}><SettingsIcon fontSize="large" /></div>
            </div>
        );
    }
}

export default Header