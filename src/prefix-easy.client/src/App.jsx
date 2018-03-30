import * as React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import { Landing } from './screens/landing/Landing';
import { FourOhFour } from './screens/four-oh-four/FourOhFour';
import { Menu } from './common/Menu';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Menu />

                <Locations>
                    <Location path="/" handler={Landing} />
                    <NotFound handler={FourOhFour} />
                </Locations>
            </div>
        );
    }
}

export default App;
