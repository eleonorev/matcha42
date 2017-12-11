import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from './config/menu.json';
import createFragment from 'react-addons-create-fragment'; // ES6


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
   'user': "caca",
   'content': "BLopblopboplpo"
 };
  }

    componentDidMount() {
          fetch("http://localhost:3600/users").then(response => {
      response.json().then(d => {
        console.log(d);
        var i = createFragment({
          'password': d[0].password,
          'email': d[0].email
        });
        this.setState({
          user: i
        });
        console.log(i);
      });

  });
}

setUser(result) {
  result.json().then(function(data) {
      this.setState({
        user : data
    });
  });
}


    componentWillUnmount() {
      this.serverRequest.abort();
    }


           Navigation() {
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

         Header_logo() {
            return <h1 className='Header-logo'> { data.title } </h1>;
          }




SubHeader() {

  let user = this.state.user;
  console.log(this.state.user);
  return (

    <div className='SubHeader'>
      <span className='SubHeader-toggle'>
        <span className='SubHeader-toggle-item'>
        </span>
        <span className='SubHeader-toggle-item'>
        </span>
        <span className='SubHeader-toggle-item'>
        </span>
        { this.state.content }
        { user['email'] }
      </span>
    </div>
  )

}

  render() {
    let Header_logo = this.Header_logo();
    let SubHeader = this.SubHeader();
    let Navigation = this.Navigation();


      return (
        <div className="ContentHead">
          <div className='Header'>
            { Header_logo }
            { Navigation }
          </div>
          { SubHeader }
        </div>
      );
    }

}

export default Header;
