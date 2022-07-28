import React from 'react';

import CatalogCard from '../components/CatalogCard'

function Catalog({pageName}) {


    return (
        <>
            <h1 className="pageName">{pageName}</h1>
            <div className="catalog">
                <div className="catalogItems">
                    <CatalogCard />
                </div>
            </div>
        </>
    )
}

export default Catalog;



