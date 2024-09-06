import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseSales, increaseSales, setSales } from '../store/reducers/mobileReducer';
import { selectMobileSales } from '../store/selectors/mobileSelector';
import { decreaseCoverSales, increaseCoverSales } from '../store/reducers/coverReducer';

const Mobile = () => {
    const mobileSales = useSelector(state => state.mobile.sales);
    const mobSales = useSelector(selectMobileSales)
    const dispatch = useDispatch(); // this is use to call the actions
    const [count, setCount] = useState(0);

    const coverSales = useSelector(state => state.cover.sales);
    return (
        <div>
            <input
                type="number"
                placeholder='Enter a number'
                value={count}
                onChange={(e) => setCount(e.currentTarget.value)}
            />
            <button onClick={() => dispatch(setSales(count))}>Submit</button>
            <button onClick={() => dispatch(increaseSales())}>Increase</button>
            <button onClick={() => dispatch(decreaseSales())}>Decrease</button>
            {mobSales}


            <h1>Cover sales-------{coverSales}</h1>

            <button onClick={() => dispatch(increaseCoverSales())}>Increase</button>
            <button onClick={() => dispatch(decreaseCoverSales())}>Decrease</button>
        </div>
    )
}

export default Mobile