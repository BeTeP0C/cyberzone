import React from "react";
// import styles from "./account.scss"
import styles from "./account.module.scss"
// import style_res from "../../_reset.global.scss"

const openAutorization = () => {
    
}

export function Account (props: {open: boolean}) {

    return (
        <div className={styles.header__account}>
            {props.open ? <a href="./" className={styles.header__button}>Выйти</a> : ""}
        </div>
    )
}