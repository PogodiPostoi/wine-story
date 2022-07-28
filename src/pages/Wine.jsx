import React from 'react';

// import CatalogCard from '../components/CatalogCard'

function Wine({pageName}) {


    return (
        <>
            <h1 className="pageName">{pageName}</h1>
            <div className="wine">
                <div className="wineItems">
                    {/* <CatalogCard /> */}
                </div>
            </div>
        </>
    )
}

export default Wine;



