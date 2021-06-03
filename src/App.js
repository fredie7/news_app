import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import './App.css';
import News from './components/news/News'
import NewsDetails from './components/newsDetails/NewsDetails'
import Layout from './components/layout/Layout'
import Menu from './components/menu/Menu'
import Navigation from './components/navigation/Navigation'

function App() {
  return (
    <>
      <Switch>
        <Layout>
          <Navigation />
          <Route exact path='/' component={News} />
          <Route exact path='/newsDetails/:id' component={NewsDetails} />
          <Route exact path='/menu' component={Menu} />
        </Layout>
      </Switch>
    </>
  );
}

export default App;
