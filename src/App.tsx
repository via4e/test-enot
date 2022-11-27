import * as React from 'react';
import Header from './components/Header'
import List from './components/List'
import RunningString from './components/RunningString';
import Control from './components/Control';
import { AppContext, todoElement, todoList } from './types';


const config: AppContext = {
  settingsVisible: false
}

export const Context = React.createContext<AppContext | null>(null)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { header: 'First man in mars say Hello', text: 'First man in mars say Hello to all people', done: false },
        { header: 'Flash Gordon Conquers the Universe', text: 'Harry C. Bradley, Larry "Buster" Crabbe, Shirley Deane', done: true }
      ],
      isListLong: false
    }
    this.addToList = this.addToList.bind(this)
    this.markAsDone = this.markAsDone.bind(this)
  }

  addToList(item, this) {
    if (this.state.isListLong || item.header.length < 1) return 0
    const newList = this.state.list
    if (newList.length < 10) {
      newList.push(item)
      this.setState({ list: newList })
    } else {
      this.setState({ isListLong: true }) 
    }
  }

  markAsDone(item) {
    console.log('App', item)
    const { done, index} = item
    const newList = this.state.list
    newList[index].done = done
    console.log('App', newList[index])
    this.setState({ list: newList })
  }

  render() {
    return (
      <Context.Provider value={config}>
        <div className="app" style={{ height: 844, width: 390 }}>
          <Header />
          <List list={this.state.list} toggleDone={this.markAsDone} />
          <Control add={this.addToList} />
          <RunningString />
        </div>
      </Context.Provider>
    );
  }
}

export default App