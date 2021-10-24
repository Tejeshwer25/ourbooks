import React from 'react';

const FilterOptions = () => {
    
    return (
        <div className="p-7 m-4 text-center text-lg flex flex-wrap justify-center items-center bg-ghostwhite rounded-md hidden" id="filterOptions">

            <span className="px-4 py-2 my-2 font-text text-black border-2 border-black rounded-md mx-4 cursor-pointer">
                <input type="checkbox" name="Self-Development" id="selfDevelopment" className="mx-2 cursor-pointer"/>
                <label for="selfDevelopment" className="cursor-pointer">Self-Development</label>
            </span>

            <span className="px-4 py-2 my-2 font-text text-black border-2 border-black rounded-md mx-4 cursor-pointer">
                <input type="checkbox" name="War" id="war" className="mx-2 cursor-pointer"/>
                <label for="war" className="cursor-pointer">War</label>
            </span>

            <span className="px-4 py-2 my-2 font-text text-black border-2 border-black rounded-md mx-4 cursor-pointer">
                <input type="checkbox" name="Novel" id="novel" className="mx-2 cursor-pointer"/>
                <label for="novel" className="cursor-pointer">Novel</label>
            </span>

            <span className="px-4 py-2 my-2 font-text text-black border-2 border-black rounded-md mx-4 cursor-pointer">
                <input type="checkbox" name="History" id="history" className="mx-2 cursor-pointer"/>
                <label for="history" className="cursor-pointer">History</label>
            </span>

            <span className="px-4 py-2 my-2 font-text text-black border-2 border-black rounded-md mx-4 cursor-pointer">
                <input type="checkbox" name="Finance" id="finance" className="mx-2 cursor-pointer"/>
                <label for="finance" className="cursor-pointer">Finance</label>
            </span>

            <span className="px-4 py-2 my-2 font-text text-black border-2 border-black rounded-md mx-4 cursor-pointer">
                <input type="checkbox" name="Biography" id="biography" className="mx-2 cursor-pointer"/>
                <label for="biography" className="cursor-pointer">Biography</label>
            </span>
        </div>
    )
}

export default FilterOptions
