import * as React from 'react';
import './styles/NotFound.css';

export default class NotFoundComponent extends React.Component<{}, {}> {

  render() {
    return (
      <div className="fof-container">
        <div className="fof-content">
          <h1>not found<br/>:(</h1>
        </div>
      </div>
    );
  }
}