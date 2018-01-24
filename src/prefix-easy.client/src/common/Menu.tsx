import * as React from 'react';
import './styles/Menu.css';
import { Link } from 'react-router-dom';

export interface MenuProps {

}

interface MenuState {

}

export default class Menu extends React.Component<MenuProps, MenuState> {

  constructor(props: MenuProps
) {
    super(props);
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-item"><Link to="/">Home</Link></div>
        <div className="menu-item"><Link to="/about">About Me</Link></div>
        <div className="menu-item"><Link to="/photography">Photography</Link></div>
        <div className="menu-item"><Link to="/design">Design</Link></div>
        <div className="menu-item"><Link to="/contact">Contact</Link></div>
      </div>
    );
  }
}