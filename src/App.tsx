import * as React from 'react';
import Header from './components/Header'
import List from './components/List'
import RunningString from './components/RunningString';
import Control from './components/Control';
import { AppContext } from './types';

const todoList: AppContext = {
  list: [
    { header: 'First man in mars say Hello', text: 'First man in mars say Hello to all people', done: false },
    { header: 'Flash Gordon Conquers the Universe', text: 'Harry C. Bradley, Larry "Buster" Crabbe, Shirley Deane', done: true }
  ]
}
export const ListContext = React.createContext<AppContext | null>(null)

class App extends React.Component {
  render() {
    return (
      <ListContext.Provider value={todoList}>
        <div className="app" style={{ height: 844, width: 390 }}>
          <Header />
          <List />
          <Control />
          <RunningString />
        </div>
      </ListContext.Provider>
    );
  }
}

export default App