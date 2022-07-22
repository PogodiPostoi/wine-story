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
                    {/*TODO: Заменить выпадающие списки с select на окно поверх + выбор ссылки */}
                    <select name="currency" id="#">
                        <option value="1">rur</option>
                        <option value="2">usd</option>
                        <option value="3">eur</option>
                        <option value="4">uah</option>
                    </select>
                </div>
                <div>account</div>
                <div>cart</div>
            </div>
            <div className={styles.headerList}>
                <div>
                    <select name="wine" id="#">
                        <option hidden>WINE</option>
                        <option value="1">White</option>
                        <option value="2">Red</option>
                        <option value="3">Pink</option>
                        <option value="4">Other</option>
                    </select>
                </div>
                <div>
                    <select name="sparkling" id="#">
                        <option hidden>SPARKLING</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </select>
                </div>
                <div>
                    <select name="whiskey" id="#">
                        <option hidden>WHISKEY</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </select>
                </div>
                <div>
                    <select name="strong" id="#">
                        <option hidden>STRONG</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </select>
                </div>
                <div>
                    <select name="beer" id="#">
                        <option hidden>BEER</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </select>
                </div>
                <div>CIDER</div>
                <div>
                    <select name="beer" id="#">
                        <option hidden>ACCESSORIES</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </select>
                </div>
                <div>BOOKS</div>
                <div>+</div>
            </div>
        </div>
    )
}
    


export default Header