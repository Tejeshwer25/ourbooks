import React from 'react';
import FilterBtn from './FilterBtn';
import FilterOptions from './FilterOptions'

const Filter = () => {
    return (
        <div className="filter">
            <div>
                <FilterBtn />
            </div>

            <div>
                <FilterOptions />
            </div>
        </div>
    )
}

export default Filter
