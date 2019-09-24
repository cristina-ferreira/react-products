import React from 'react';
import { Route, HashRouter, Switch, NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import EditProduct from './EditProduct';

const App = () => {
    const initialProducts = [
        { id: '1', name: "Coffee", description: "strong stimulant" },
        { id: '2', name: "Chocolate", description: "sweet stimulant" },
        { id: '3', name: "Tee", description: "relaxing stimulant" },
    ];

    return (
        <HashRouter basename={process.env.REPO_NAME}>
            <div>
                <Nav className="">
                    <NavLink className="tab" exact to="/"> Home </NavLink>
                    <NavLink className="tab" to="/products"> Products </NavLink>
                </Nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product/:id" render={props => <Product {...props} products={initialProducts} />} />
                    <Route path="/products" render={() => <Products products={initialProducts} />} />
                    <Route path="/product/:id/edit" component={EditProduct} />
                </Switch>
            </div>
        </HashRouter>

    );
};
export default App;
