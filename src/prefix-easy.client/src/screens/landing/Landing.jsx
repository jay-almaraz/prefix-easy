import * as React from 'react';
import './landing.scss';
import { CenterSection } from '../../common/Center';

export class Landing extends React.Component {
    render() {
        return (
            <CenterSection>
                <div className="home-container">
                    <div className="home-content">
                        <div className="title-badge">Jay Almaraz</div>
                        <div className="title-block two-line-grid">
                            <div className="left-cell row-one">PREFIX</div>
                            <div className="right-cell row-one">EASY</div>
                            <div className="left-cell row-two">prefiX</div>
                            <div className="right-cell row-two">easy</div>
                        </div>

                    </div>
                </div>
            </CenterSection>
        );
    }
}