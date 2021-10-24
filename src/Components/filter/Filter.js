import React from 'react';
import FilterBtn from './FilterBtn';
import FilterOptions from './FilterOptions'

const Filter = () => {

    const handleFilterBtnClick = () => {
        const filterOptions = document.getElementById('filterOptions');
        
        if(filterOptions.classList.contains('hidden')) {
            filterOptions.classList.remove('hidden');
        } else {
            filterOptions.classList.add('hidden');
        }
    }

    return (
        <div className="filter">
            <div>
                <FilterBtn handleClick={handleFilterBtnClick}/>
            </div>

            <div>
                <FilterOptions />
            </div>
        </div>
    )
}

export default Filter
