import * as React from 'react';
import { CenterSection } from '../../common/Center';

export class AboutScreen extends React.Component {
    render() {
        return (
            <CenterSection
                {...this.props}
            >
                <h1>AboutScreen</h1>
            </CenterSection>
        );
    }
}