import React from 'react';

import styles from "./PagePath.module.scss"

function PagePath() {
    return (
        <div className={styles.pagePath}>
            <button>home</button>
            <img src="/img/arrow-right.png" alt="arrow" />
            <button>catalog</button>
        </div>
    )
}

export default PagePath;