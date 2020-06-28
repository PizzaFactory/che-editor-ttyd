import { h, Component } from 'preact';

import './navbar.scss';

export class Navbar extends Component {
    isExpanded = true;

    toggle() {
      window.parent.postMessage(this.isExpanded ? 'hide-navbar' : 'show-navbar', '*');
      this.isExpanded = !(this.isExpanded);
    }

    render() {
        return (
                <div className="navbar" onClick={this.toggle}>
                </div>
            );
    }
}
