import React from 'react';

import Card from './Card';

const Main = ({data, filter}) => {

    const list = data.filter(item => {
        if(filter.indexOf(item.book_genre) === -1) {
            return false;
        }
        return true;
    });

    return (
        <div className="my-4 flex flex-wrap justify-evenly items-baseline">
            {filter.length === 0 ? data.map(item => <Card book={item} key={item.id}/>) : list.map(item => <Card book={item} key={item.id} />)}
        </div>
    )
}

export default Main;