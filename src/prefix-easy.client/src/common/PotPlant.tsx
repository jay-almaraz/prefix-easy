import * as React from 'react';
import './styles/PotPlant.css';
import './assets/flowers.svg';

export interface PotPlantProps {
    className?: string;
}

export default class PotPlant extends React.Component<PotPlantProps, {}> {
    constructor(props: PotPlantProps) {
        super(props);
    }

    render() {

        const {
            className
        } = this.props;

        return (
            <div id="art-container" className={className}>
                <div id="flower-container">
                    <div id="flower"></div>
                </div>
                <div id="tiles-container">
                    <div id="tile-plate"></div>
                    <div id="tile-zero" className="tile left-tile">0</div>
                    <div id="tile-one" className="tile right-tile">1</div>
                    <div id="tile-two" className="tile left-tile">2</div>
                    <div id="tile-three" className="tile right-tile">3</div>
                    <div id="tile-four" className="tile left-tile">4</div>
                    <div id="tile-five" className="tile">5</div>
                    <div id="tile-six" className="tile right-tile">6</div>
                </div>
            </div>
        );
    }
}