import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from './config/menu.json';

class Header extends Component {

  constructor() {
    super();
    var title = "Matcha";
  }


  render() {

      function SubHeader() {
          console.log('pioi');
          var user = fetch("http://localhost:3600/users")
          .then(function(result) {
            console.log(user);
      });

      return (
        <div className='SubHeader'>
          <span className='SubHeader-toggle'>
            <span className='SubHeader-toggle-item'>
            </span>
            <span className='SubHeader-toggle-item'>
            </span>
            <span className='SubHeader-toggle-item'>
            </span>
          </span>
        </div>
      )
    }

    function Navigation() {
        var navigation_item =
        Object.keys(data.menu).map(key =>
          <a className='Navigation-item' href={data.menu[key].href}>
            {data.menu[key].name}
          </a>
        );

        return (
          <div className='Navigation'>
          { navigation_item }
          </div>
        );
    }

    function Header_logo() {
      return <h1 className='Header-logo'> { data.title } </h1>;
    }

    return (
      <div className="ContentHead">
        <div className='Header'>
          <Header_logo />
          <Navigation />
        </div>
        <SubHeader />
      </div>
    );
  }
}

export default Header;
