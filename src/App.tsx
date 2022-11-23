import * as React from 'react';
import Header from './components/Header'
import List from './components/List'
import RunningString from './components/RunningString';
import Control from './components/Control';

//Context

export interface AppContext {
  list: string[];
}

const todoList: AppContext = { list: ['first task', 'second task'] }
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