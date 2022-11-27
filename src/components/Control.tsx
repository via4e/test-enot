import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this)
  }

  state = {
    header: '',
    text: ''
  };

  onChangeHeader(ev) {
    this.setState({ header: ev.target.value });
  }

  onChangeText(ev) {
    this.setState({ text: ev.target.value });
  }

  addHandler () {
    const obj = {
      header: this.state.header,
      text: this.state.text,
      done: false
    }
    this.setState({ header: '', text: '' })
    this.props.add(obj)
  }

  render () {
    return (
      <div className='control'>
        <Input placeholder='New ToDo text' value={this.state.header} onChange={this.onChangeHeader.bind(this)} />
        <Input placeholder='New ToDo description' value={this.state.text} onChange={this.onChangeText.bind(this)}  />
        <Button variant='contained' onClick={ this.addHandler }>Add</Button>
      </div>
    );
  }
}

export default Control
