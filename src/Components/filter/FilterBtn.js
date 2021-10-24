import React from 'react'

const FilterBtn = ({handleClick}) => {
    return (
        <button className="btn bg-blue rounded-md py-2 px-4 text-ghostwhite font-text text-xl w-full hover:bg-black" onClick={handleClick}>
            Filter By Genre
        </button>
    )
}

export default FilterBtn
