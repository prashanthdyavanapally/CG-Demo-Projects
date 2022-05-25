import React from 'react'
import { Carousell } from './Carousel/Carousel'
import { Categories } from './Categories/Categories'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Homepage = () => {
    return (
        <div>
            <Carousell />
            <Categories />
        </div>
    )
}
