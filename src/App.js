import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Details from './components/Details/Details';


function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
