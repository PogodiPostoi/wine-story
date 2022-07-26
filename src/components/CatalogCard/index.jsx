import React from 'react';

import styles from './CatalogCard.module.scss';

import { AppContext } from "../../App";


function CatalogCard() {

    const {catalogItems} = React.useContext(AppContext)
    const renderItems = (item) => {
        return(
            item.map((item, index) => {
                return(
                    <div key={index} className={styles.catalogCard}>
                        <h3 className={styles.catalogCardName}>{item.name}</h3>
                        <img className={styles.catalogCardImg} src={item.img} alt="card item" />
                        <img className={styles.catalogCardArrow} src="/img/search-arrow.png" alt="arrow" />
                    </div>
                )
            })
        )
    }

    return (
        renderItems(catalogItems)
    )
}

export default CatalogCard;