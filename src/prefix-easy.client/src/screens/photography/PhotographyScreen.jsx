import * as React from 'react';
import { CenterSection } from '../../common/Center';

export class PhotographyScreen extends React.Component {
    render() {
        return (
            <CenterSection
                {...this.props}
            >
                <h1>PhotographyScreen</h1>
            </CenterSection>
        );
    }
}