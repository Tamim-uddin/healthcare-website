
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contex/AuthProvider';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import Header from './Pages/Header/Header';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';



function App() {
  return (
    <div className="App">
    <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route> 
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/details/:serviceId">
                <Details></Details>
              </PrivateRoute> 
              <Route path="/login">
               <Login></Login>  
              </Route>
              <Route path="/register">
                <Register></Register>  
              </Route> 
              <Route path="*">
                <NotFound></NotFound>
              </Route>         
          </Switch>
          <Footer></Footer>
        </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
