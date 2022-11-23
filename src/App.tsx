import * as React from 'react';
import Header from './components/Header'
import List from './components/List'
import RunningString from './components/RunningString';

//Context

export interface AppList {
  list: string[];
}

const todoList: AppList = { list: ['first task', 'second task'] }
export const ListContext = React.createContext<AppList | null>(null)

class App extends React.Component {
  render() {
    return (
      <ListContext.Provider value={todoList}>
        <div className="app" style={{ height: 844, width: 390 }}>
          <Header />
          <List />
          <RunningString />
        </div>
      </ListContext.Provider>
    );
  }
}

export default App