var React = require('react');
import {Link, IndexLink} from 'react-router';
var $ = require('jquery');

class Nav extends React.Component {
  componentWillMount() {
    $(document).foundation();
  }

  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">
              World Foods
            </li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Ready to shop?</IndexLink>

            </li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Currency</Link>
              <ul className="menu">
                <li><a href="#">UK POUND (GBP)</a></li>
                <li><a href="#">EURO (EUR)</a></li>
                <li><a href="#">US DOLLAR (USD)</a></li>
                <li><a href="#">CANADIAN DOLLAR (CAD)</a></li>
                <li><a href="#">POLISH ZIOTY (PLN)</a></li>
              </ul>
            </li>
            <li><Link to="/basket" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Basket</Link></li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search for products" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Find Product"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
};

export default Nav;
