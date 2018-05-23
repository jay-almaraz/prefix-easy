import * as React from 'react';
import './welcome.scss';
import { CenterSection } from '../../common';

export class WelcomeScreen extends React.Component {
    render() {
        return (
            <CenterSection
                {...this.props}
                style={{
                    // background: "linear-gradient(141deg, #ffffff 0%, #ffffd6 51%, #ffe2d6 75%)"
                }}
            >
                <div class="content">
                    <div class="avatar-wrap">
                        <div class="avatar"/>    
                    </div> 
                    <div class="text-wrap">
                        <div class="text">
                            <h1>Welcome, I'm Jay</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </CenterSection>
        );
    }
}