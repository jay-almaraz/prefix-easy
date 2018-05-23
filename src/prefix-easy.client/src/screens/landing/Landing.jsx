import * as React from 'react';
import './landing.scss';
import backgroundImage from './IMG_2949.JPG';
import { CenterSection } from '../../common';
import { WelcomeScreen } from '../';

export class Landing extends React.Component {
    render() {
        return (
            <div>
                <CenterSection
                    backgroundimage={backgroundImage}
                    {...this.props}
                >
                    <div className="home-container">
                        <div className="home-content">
                            <div className="title-badge">
                                <div className="title-badge-text">
                                Jay Almaraz
                                </div>
                            </div>
                            <div className="title-block two-line-grid">
                                <div className="left-cell row-one">PREFIX</div>
                                <div className="right-cell row-one">EASY</div>
                                <div className="left-cell row-two">prefix</div>
                                <div className="right-cell row-two">easy</div>
                            </div>
                        </div>
                    </div>
                </CenterSection>

                <WelcomeScreen/>
            </div>
        );
    }
}