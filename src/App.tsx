import * as React from 'react';
import Header from './components/Header'
import List from './components/List'
import RunningString from './components/RunningString';

//Context
const todoList: string[] = ['first task', 'second task']
const ListContext = React.createContext<string[] | null>(null)

class App extends React.Component {
  render() {
    return (
      <ListContext.Provider value={{ todoList }}>
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