import React from 'react'
import Shelf from './shelf'

const Department = ({ sales }) => {
    return (
        <div><Shelf sales={sales} /></div>
    )
}

export default Department