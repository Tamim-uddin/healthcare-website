import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import Header from './Pages/Header/Header';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';



function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
       <Route path="/">
           <Home></Home>
         </Route> <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/details/:serviceId">
           <Details></Details>
         </Route>
        
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
