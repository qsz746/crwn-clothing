import React, { Fragment } from 'react';
import styles from './footer.module.css';
import QRCode from '../../assets/QRCode.svg';


const Footer =()=>{
    return (
        <Fragment>
           <footer class={styles.siteFooter}>
               {/*-- Footer main --*/}
                <div class={styles.footerMain}>
                    <div class={styles.footerMainItem}>
                        <h2 class={styles.footerTitle}>About</h2>
                        <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> iotstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>

                    <div class={styles.footerMainItem}>
                        <h2 class={styles.footerTitle}>Location</h2>
                        <p>123 Graville Road, Richmond, BC</p>
                    </div>

                    <div class={styles.footerMainItem}>
                        <h2 class={styles.footerTitle}>Contact US</h2>
                        <p>Tel: 2368636478</p>
                        <p>Email: crownclothing@gmail.com</p>
                    </div>

                    <div class={styles.footerMainItem}>
                        <h2 class={styles.footerTitle}>QR code</h2>
                        <img class={styles.QRCode} alt="QR Code" src={QRCode}/>
                    </div>
                </div>
                <hr/>  

                {/*-- Footer legal --*/}
                <div class={styles.footerLegal}>
                    <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by Crown Clothing. </p>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;