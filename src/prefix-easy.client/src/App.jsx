import * as React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import { Menu } from './common/Menu';
import { Landing } from './screens/landing/Landing';
import { FourOhFour } from './screens/four-oh-four/FourOhFour';
import { PhotographyScreen } from './screens/photography/PhotographyScreen';
import { SoftwareScreen } from './screens/software/SoftwareScreen';
import { AboutScreen } from './screens/about/AboutScreen';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Locations>
                    <Location
                        path="/"
                        handler={Landing}
                    />
                    <Location
                        path="/photography"
                        handler={PhotographyScreen}
                    />
                    <Location
                        path="/software"
                        handler={SoftwareScreen}
                    />
                    <Location
                        path="/about"
                        handler={AboutScreen}
                    />
                    <NotFound handler={FourOhFour} />
                </Locations>
            </div>
        );
    }
}

export default App;
