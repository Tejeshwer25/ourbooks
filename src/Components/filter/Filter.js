import React from 'react';
import FilterBtn from './FilterBtn';
import FilterOptions from './FilterOptions'

const Filter = ({setFilter, filters}) => {

    const updateFilter = (genre, e) => {
        const checked = e.target.checked;

        if(checked && filters.indexOf(genre) === -1) {
            setFilter(oldFilter => [...oldFilter, genre]);
        } 
        else if(!checked && filters.indexOf(genre) !== -1) {
            setFilter(filters.filter(item => item !== genre));
        }
    }

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
                <FilterOptions updateFilter={updateFilter}/>
            </div>
        </div>
    )
}

export default Filter
