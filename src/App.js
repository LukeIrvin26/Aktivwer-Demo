import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import ScrollToTop from './hooks/ScrollToTop';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <NavMenu />
        <Cart />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/categories/:id">
            <CategoryPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
