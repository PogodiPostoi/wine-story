import React from 'react';

import styles from './CatalogCard.module.scss';

function CatalogCard() {
    return (
        <div className={styles.catalogCard}>
            <h3>wine</h3>
            <img src="#" alt="card item" />
            <img src="#" alt="arrow" />
        </div>
    )
}

export default CatalogCard;