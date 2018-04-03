import * as React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import { Landing } from './screens/landing/Landing';
import { FourOhFour } from './screens/four-oh-four/FourOhFour';
import { PhotographyScreen } from './screens/photography/PhotographyScreen';
import { Menu } from './common/Menu';
import { SoftwareScreen } from './screens/software/SoftwareScreen';
import { AboutScreen } from './screens/about/AboutScreen';
import ScrollableAnchor from 'react-scrollable-anchor';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Locations>
                    <Location
                        path="/"
                        handler={Container}
                    />
                    <Location
                        path="/photography"
                        handler={PhotographyScreen}
                    />
                    <Location
                        path="/software"
                        handler={SoftwareScreen}
                    />
                    <NotFound handler={FourOhFour} />
                </Locations>
            </div>
        );
    }
}

class Container extends React.Component {
    render() {
        return (
            <div>
                <ScrollableAnchor id='home' >
                    <Landing />                    
                </ScrollableAnchor>                

                <ScrollableAnchor id='about' >
                    <AboutScreen />
                </ScrollableAnchor>
            </div>
        );
    }
}

export default App;
