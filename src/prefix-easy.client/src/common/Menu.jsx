import * as React from 'react';
import { Link } from 'react-router-component';
import './menu.scss';

export class Menu extends React.Component {
    render() {
        return (
            <div className="menu-bar">
                <div className="menu-container">
                    <a href="/#home" className="menu-item">Home</a>
                    <Link href="/photography" className="menu-item">Photography</Link>
                    <Link href="/software" className="menu-item">Software</Link>
                    <a href="/#about" className="menu-item">About</a>
                </div>
            </div>
        );
    }
}