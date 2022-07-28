import React from 'react';

import CatalogCard from '../components/CatalogCard'

function Catalog() {


    return (
        <>
            <h1 className="pageName">catalog</h1>
            <div className="catalog">
                <div className="catalogItems">
                    <CatalogCard />
                </div>
            </div>
        </>
    )
}

export default Catalog;



