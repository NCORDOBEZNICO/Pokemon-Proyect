import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import Form from './Form/Form';
import About from './About/About';
import SearchBar from './SearchBar/SearchBar';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import Detail from './Components/CardDetail/CardDetail';



function App() {
  const location = useLocation()
  




  


  return (
    <div className="App">
      {location.pathname !== "/" && <SearchBar />}
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Form} />
      <Route exact path='/about' component={About} />
      
    </div>
  );
}

export default App;
