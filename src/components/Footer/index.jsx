import React from 'react';

import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerMap}>
                <div>
                    <h3>catalog</h3>
                    <p>Wine</p>
                    <p>Sparkling</p>
                    <p>Whiskey</p>
                    <p>Other sturdy</p>
                    <p>Beer</p>
                    <p>Cider</p>
                    <p>Cases</p>
                    <p>Non-acloholic</p>
                </div>
                <div>
                    <h3>wine story</h3>
                    <p>About us</p>
                    <p>Vacancies</p>
                    <p>Store addresses</p>
                    <p>News</p>
                    <p>Promotions</p>
                    <p>Loyalty program</p>
                    <p>Tastings calendar</p>
                    <p>Sommelier school</p>
                </div>
                <div>
                    <h3>delivery</h3>
                    <p>Delivery and payment terms</p>
                    <p>Return of goods</p>
                </div>
                <div>
                    <h3>contact</h3>
                    <div className={styles.footerMapTel}>
                        <p>Online store</p>
                        <a href="tel:+70443907961">044 390 79 61</a>
                        <a href="tel:+70503850468">050 385 04 68</a>
                    </div>
                    <div className={styles.footerMapHours}>
                        <p>Working hours</p>
                        <p>Mon-Fri 9: 00-21: 00</p>
                        <p>Sat. 10: 00-1: 00</p>
                    </div>
                    <div className={styles.footerMapAddress}>
                        <p>Address:</p>
                        <address>Moscow, Red Square 1</address>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <p>&copy; 2003-Today, Wine Story online story, Russian Wine company. We only show you pictures.</p>
                {/* Заменить нижнее на ссылку */}
                <p className={styles.footerCopyrightTOU} href="#" target="_blank">Term of use</p>
            </div>
        </div>

        
    )
}

export default Footer;