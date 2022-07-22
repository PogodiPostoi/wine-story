import React from 'react';
import styles from "./Dropdown.module.scss";

function Dropdown({btnName, itemList}) {

    const renderItems = (item) => {
        return (
            item.map((item, index) => {
                return (
                    <button key={index}>{item}</button>
                )
            })
        )
    }
    
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropBtn}>
                {`${btnName}`}
                <img src="/img/arrow-down.png" alt="" />
            </button>
            <div className={styles.dropdownContent}>
                {renderItems(itemList)}
            </div>
        </div>
    )
}

export default Dropdown