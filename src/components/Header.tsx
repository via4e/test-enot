import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="header-app">
                <div>ToDo</div>
                <div><SettingsIcon fontSize="large" /></div>
            </div>
        );
    }
}

export default Header