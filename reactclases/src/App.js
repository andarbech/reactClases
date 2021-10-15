
import { BrowserRouter , Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/productListing';
function App() {
    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Header />
                    <Switch>
                    <Route path="/" exact component={ProductListing}/>
                    <Route path="/product/:productId" exact component={ProductListing}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    ); 
}

export default App;