import React from 'react';

import Card from './Card';

const Main = ({data}) => {

    return (
        <div className="my-4 flex flex-wrap justify-evenly items-baseline">
            {data.map(item => <Card book={item} key={item.id}/>)}
        </div>
    )
}

export default Main;