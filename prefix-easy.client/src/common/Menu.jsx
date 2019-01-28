import * as React from 'react';
import { Link } from 'react-router-component';
import './menu.scss';

export class Menu extends React.Component {
    render() {
        return (
            <div className="menu-bar">
                <div className="menu-container">
                    <Link href="/" className="menu-item">Home</Link>
                    <Link href="/photography" className="menu-item">Photography</Link>
                    <Link href="/software" className="menu-item">Software</Link>
                    <Link href="/about" className="menu-item">About me</Link>
                </div>
            </div>
        );
    }
}