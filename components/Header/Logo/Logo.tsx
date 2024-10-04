import React from "react";
import styles from "./logo.module.scss"
import Image from "next/image";
import logo from "./header_logo.svg"

export function Logo () {
    return (
        <a href="#">
            <Image className={styles.header__logo} src={logo} alt="Логотип"/>
            {/* <img  className={styles.header__logo} src={logo} alt="Логотип"/> */}
        </a>
    )
}