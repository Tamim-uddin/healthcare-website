import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';



function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route path="/details/:serviceId">
           <Details></Details>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
