import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header'
import Gear from './components/Gear'
import List from './components/List'
import RunningString from './components/RunningString';
import Control from './components/Control';
import { AppContext } from './types';


const config: AppContext = {
  settingsVisible: false,
  settingsToggle(value) {
    this.settingsVisible = value
  },
  runningVisible: true,
  runningToggle(value) {
    this.runningVisible = value
  }
}

const queryClient = new QueryClient();

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
    this.toggleRunningString = this.toggleRunningString.bind(this)
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  toggleRunningString (value) {
    config.runningToggle(value)
    this.forceUpdate()
  }

  toggleSettings(value) {
    config.settingsToggle(value)
    this.forceUpdate()
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
    const { done, index} = item
    const newList = this.state.list
    newList[index].done = done
    this.setState({ list: newList })
  }

  render() {
    return (
      <Context.Provider value={config}>
        <QueryClientProvider client={queryClient}>
        <div className="app" style={{ height: 844, width: 390 }}>
          <div id='top'>
            <Gear toggleSettings={this.toggleSettings}  toggleRunning={this.toggleRunningString}/>
          </div>
          <Header toggleSettings={this.toggleSettings} />
          <List list={this.state.list} toggleDone={this.markAsDone} />
          <Control add={this.addToList} />
          <RunningString />
        </div>
        </QueryClientProvider>
      </Context.Provider>
    );
  }
}

export default App