import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "../Dropdown";

import styles from "./Header.module.scss";

function Header() {
    const headerWineList = ["White", "Red", "Pink", "Other"]
    const headerSparklingList = ["One", "Two", "Three", "Four"]
    const headerWhiskeyList = ["One", "Two", "Three", "Four"]
    const headerStrongList = ["One", "Two", "Three", "Four"]
    const headerBeerList = ["One", "Two", "Three", "Four"]
    const headerAccessoriesList = ["One", "Two", "Three", "Four"]


    return (
        <div className={styles.header}>
            <div className={styles.headerDotted}>
                &#8226;&#8226;&#8226;
            </div>
            <div className={styles.headerInfo}>
                <div className={styles.headerInfoLogo}>
                    <Link to="/">
                        <img src="/img/header/logo.png" alt="logo" />
                        <span>winestory</span>
                    </Link>
                </div>
                <div className={styles.headerInfoSearch}>
                    <input placeholder="search"/>
                    <img src="/img/search-arrow.png" alt="arrow" 
                        width={20} 
                        height={20}
                    />
                </div>
                <div className={styles.headerInfoPhone}>
                    <a href="tel:+76660852969">(666)085 29 69</a>
                </div>
                <div className={styles.headerInfoCurrency}>
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
                    {/* TODO: Ширину выпадающего списка брать от родительского блока*/}
                    {/* TODO: Подумать, как сократить код с помощью .map() на этот компонент*/}
                <div className={styles.headerListItem}>
                    <Link to="/wine">
                        <Dropdown
                            itemList={headerWineList}
                            btnName={"wine"}
                        />
                    </Link>
                </div>
                <div className={styles.headerListItem}>
                    <Dropdown
                        itemList={headerSparklingList}
                        btnName={"sparkling"}
                    />
                </div>
                <div className={styles.headerListItem}>
                    <Dropdown
                        itemList={headerWhiskeyList}
                        btnName={"whiskey"}
                    />
                </div>
                <div className={styles.headerListItem}>
                    <Dropdown
                        itemList={headerStrongList}
                        btnName={"strong"}
                    />
                </div>
                <div className={styles.headerListItem}>
                    <Dropdown
                        itemList={headerBeerList}
                        btnName={"beer"}
                    />
                </div>
                <div className={styles.headerListItem}>CIDER</div>
                <div className={styles.headerListItem}>
                    <Dropdown
                        itemList={headerAccessoriesList}
                        btnName={"accessories"}
                    />
                </div >
                <div className={styles.headerListItem}>BOOKS</div>
                <div className={styles.headerListItem}>+</div>
            </div>
        </div>
    )
}
    


export default Header