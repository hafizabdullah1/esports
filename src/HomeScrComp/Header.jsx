import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {

  render() {
    return (<>
      <header>
        <nav>
          <div>
          <img src="/img/logo.png" alt="" />
          <h3>esports<span>.com</span></h3>
          </div>
          <div>
            <ul>
              <li>
              <NavLink exact to="/" activeClassName="active_class">Home</NavLink>

                </li>

              <li>
                <NavLink exact to="/news" activeClassName="active_class">News</NavLink>
              </li>

              <li>
                <NavLink exact to="/videos"  activeClassName="active_class">Videos</NavLink>
              </li>

              <li>
                <NavLink exact to="/special_deals"  activeClassName="active_class">Special Deals</NavLink>
              </li>

              <li>
                <NavLink exact to="/shop"  activeClassName="active_class">Shop</NavLink>
              </li>
      

              <li><i class="fa-solid fa-toggle-on"></i></li>
              <li>EN <i class="fa-solid fa-angle-down"></i></li>
            </ul>
          </div>
        </nav>
      </header>
      </>
    )
  }
}

