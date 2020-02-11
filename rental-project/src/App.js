import React, {Component} from "react";
import Rental from "./Rental"
import CreateItem from './createItem'
import EditItem from './editItem'
import Login from './login'
import SendMessage from './sendMessage'
import NotFound from './notfound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//use RouteGard to authorise and controll access
// class RouteGuard extends Component{
//   state={
//     isLoggedIn: false
//   }

//   render(){
//     const {component:Component,...otherProps}=this.props
//         return (
//            <Route {...otherProps} render={props=>(
//             this.state.isLoggedIn?<Component {...props}></Component>:
//                (<Redirect to={
//                    {pathname:'/login',state:{from:props.location.pathname}}
//                }></Redirect>)
//            )}></Route> 
//         )
//   }
// }

export default function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/rental">Rental</Link>
          </li>
          <li>
            <Link to="/createItem">Add a Rental Item</Link>
          </li>
          <li>
            <Link to="/editItem">Edit Item</Link>
          </li>
          <li>
            <Link to="/sendMessage">Send a Message</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/rental" component={Rental}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/createItem" component={CreateItem}></Route>
          <Route path="/editItem" component={EditItem}></Route>
          <Route path="/sendMessage" component={SendMessage}></Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
