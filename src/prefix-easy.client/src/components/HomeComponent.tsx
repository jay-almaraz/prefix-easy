import * as React from 'react';
import './styles/Home.css';

export default class HomeComponent extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <div className="home-container">
          <div className="home-content">

            <div className="title-block two-line-grid">
              <div className="left-cell row-one">PREFIX</div>
              <div className="right-cell row-one">EASY</div>
              <div className="left-cell row-two">prefiX</div>
              <div className="right-cell row-two">easy</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}