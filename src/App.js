import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';

import { Layout, Menu } from 'antd';
const { Header, Footer } = Layout;
class App extends Component {
     render() {
          return (
               <Router>
                    <Layout>
                         <Header className="header">
                              <div className="logo" />
                              <Menu
                                   theme="dark"
                                   mode="horizontal"
                                   defaultSelectedKeys={['2']}
                                   style={{ lineHeight: '64px' }}
                              >
                                   <Menu.Item key="1"><Link to={'/'} className="nav-link"> Home </Link></Menu.Item>
                                   <Menu.Item key="2"><Link to={'/contact'} className="nav-link">Contact</Link></Menu.Item>
                                   <Menu.Item key="3"><Link to={'/about'} className="nav-link">About</Link></Menu.Item>
                                   <Menu.Item key="4"><Link to={'/login'} className="nav-link">Login</Link></Menu.Item>
                              </Menu>
                         </Header>

                         <Switch>
                              <Route exact path='/' component={Home} />
                              <Route path='/contact' component={Contact} />
                              <Route path='/about' component={About} />
                              <Route path='/login' component={Login} />
                         </Switch>
                         <Footer>
                              Footer
                         </Footer>
                    </Layout>


               </Router>
          );
     }

}

export default App;
