import React from 'react';
import "./App.css";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./SearchPage"

function App() {
  return (
    <div className="App">
        <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );


      {/* Banner */} {/*complied in home.js */ }
      {/* Card */} {/*complied in banner.js */ }
      {/* SearchPage */}{/*complied to search.js */}
    </div>
  )
}

export default App