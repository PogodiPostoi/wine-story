import React from 'react';

// import CatalogCard from '../components/CatalogCard'

function Wine({pageName}) {


    return (
        <>
            <h1 className="pageName">{pageName}</h1>
            <div className="wine">
                <aside>
                    {/* TODO: Фильтр вынести в отдельный компонент */}
                    <h3>Filter</h3>
                    <div className="priceFilter">
                        <p>price</p>
                        <p>+</p>
                    </div>
                    
                </aside>
                <div className="wineItems">
                    {/* <CatalogCard /> */}
                    1
                </div>
            </div>
        </>
    )
}

export default Wine;



