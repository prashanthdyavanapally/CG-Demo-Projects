import React from 'react'
import { NavBar } from './NavBar/NavBar'
import { Search } from './Search/Search'
import { Favorites } from './Favorites/Favorites'
import {Destinations} from './Destinations/Destinations'
import {YoutubeAd} from './YoutubeAd/YoutubeAd'
import { TopAttractions } from './TopAttractions/TopAttractions'
import {TopDestinations} from './TopAttractions/TopDestinations'
import { TopCountries } from './TopAttractions/TopCountries'
import {Footer} from './Footer'
import { AttractionCategories } from './TopAttractions/AttractionCategories'

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Search />
            <Favorites />
            <Destinations/>
            <YoutubeAd />
            <TopAttractions />
            <TopDestinations />
            <TopCountries />
            <AttractionCategories/>
            <Footer/>
        </div>
    )
}
