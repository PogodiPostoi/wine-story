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
                    <img src="/img/header/logo.png" alt="logo" />
                    <span>winestory</span>
                </div>
                <div className={styles.headerInfoSearch}>
                    <input placeholder="search"/>
                    <img src="/img/arrow.png" alt="arrow" 
                        width={20} 
                        height={20}
                    />
                </div>
                <div className={styles.headerInfoPhone}>
                    <a href="tel:+76660852969">(666)085 29 69</a>
                </div>
                <div className={styles.headerInfoCurrency}>
                    <select name="#" id="#">
                        <option value="1">rur</option>
                        <option value="2">usd</option>
                        <option value="1">eur</option>
                        <option value="1">uah</option>
                    </select>
                </div>
                <div>account</div>
                <div>cart</div>
            </div>
        </div>
    )
}
    


export default Header