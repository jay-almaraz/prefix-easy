import * as React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import { Menu } from './common';
import { Landing } from './screens';
import { FourOhFour } from './screens';
import { PhotographyScreen } from './screens';
import { SoftwareScreen } from './screens';
import { AboutScreen } from './screens';

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
