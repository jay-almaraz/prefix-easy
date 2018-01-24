import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent, NotFoundComponent } from './components';
import { Menu } from './common';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Menu/>

          <div className="App-content">
            <Switch>
              <Route exact={true} path="/" component={HomeComponent}/>
              <Route component={NotFoundComponent}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
