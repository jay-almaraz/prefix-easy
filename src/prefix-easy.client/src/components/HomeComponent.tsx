import * as React from 'react';
import './styles/Home.css';

export default class HomeComponent extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <div className="home-container">
          <div className="home-content">
            <h1>Home</h1>
          </div>
        </div>
      </div>
    );
  }
}