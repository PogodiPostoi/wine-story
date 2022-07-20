import React from "react";
import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerDotted}>
                &#8226;&#8226;&#8226;
            </div>
            <div className={styles.headerInfo}>
                <div className={styles.headerInfoLogo}>
                    <img src="/img/catalog/logo.png" alt="logo" />
                    <span>winestory</span>
                </div>
                <div>search</div>
                <div>phone</div>
                <div>currency</div>
                <div>account</div>
                <div>cart</div>
            </div>
        </div>
    )
}
    


export default Header