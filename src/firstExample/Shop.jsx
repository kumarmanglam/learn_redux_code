import React, { useState } from 'react'
import Department from './departement';
import { useSelector } from 'react-redux';

const Shop = () => {
    const [sales, setSales] = useState(0);
    const mobSale = useSelector(state => state.mobile.sales);
    return (
        <div>
            <button onClick={() => setSales(sales + 1)}>Increase</button>
            <button onClick={() => setSales(sales - 1)}>Decrease</button>
            <Department sales={sales} />
            {mobSale}
        </div>
    )
}

export default Shop;

//two ways - 1. useContext 2. Redux

// shop state declare == pass
// departement == pass
// shelf  == pass
// abs == pass
// xys == use

// store - centrally

//shop state change
//departement
//shelf
// abs
//xyz dynamically updated value will come here 