import React from "react";
import styles from "./products.module.scss"
import modalStyles from "./Modal/modal.module.scss"
import { useState } from "react";
import { Product } from "./Product/Product";
import { Modal } from "./Modal";

type TOpenModal = {
    open: boolean,
    id: string
}

export function Products () {
    const [opened, setOpened] = useState({
        open: false,
        id: "0",
    });

    function changeOpened (e: any) {
        setOpened({
            open: !opened.open,
            id: e.target.id,
        })
    }
    
    return (
        <section className={styles.section}>
            <Product props={changeOpened}/>
            <Modal props={{opened, setOpened}}/>
        </section>
    )
}