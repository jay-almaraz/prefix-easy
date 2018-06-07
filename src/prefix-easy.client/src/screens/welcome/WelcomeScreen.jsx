import * as React from 'react';
import './welcome.scss';
import { CenterSection } from '../../common';
import avatar from '../../resources/img/log_avatar_256.jpg'

export class WelcomeScreen extends React.Component {
    render() {
        return (
            <div style={{
                // 'overflow-x': 'hidden'
            }}>
                <div class="top-border-triangle"/>
                <CenterSection
                    {...this.props}
                    style={{
                        // background: "linear-gradient(141deg, #ffffff 0%, #ffffd6 51%, #ffe2d6 75%)"
                        minHeight: "40vh"
                    }}
                >
                    <div class="content">
                        <div class="avatar-wrap bounce">
                            <div class="avatar-border">
                                <div class="avatar phase"/>
                                <img class="avatar" src={avatar}/>
                            </div>
                        </div> 
                        <div class="text-wrap">
                            <div class="text">
                                <h1>Hello, I'm Jay</h1>
                                {/* <div class="h1-underline"/> */}
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>
                    </div>
                </CenterSection>
            </div>
        );
    }
}