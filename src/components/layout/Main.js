import React from 'react';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import Orders from '../Orders/Orders';
import Shop from '../Shop/Shop';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Shop></Shop>
            <Inventory></Inventory>
            <Orders></Orders>
        
        </div>
    );
};

export default Main;