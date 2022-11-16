import React from 'react'
import SearchContent from '../components/SearchContent'
import SearchFilter from '../components/SearchFilter'
import SearchHeader from '../components/SearchHeader'


function Search() {
    return (
        <div className="">
           <SearchHeader/>
            <div className="flex">
               <SearchFilter/>
               <SearchContent/>
           </div>
        </div>
    )
}

export default Search
