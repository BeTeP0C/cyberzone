import React from "react";
import Image from "next/image";
import { bd } from "./bd"; 
import img1 from './img/products_1.png'
import img2 from './img/products_2.png'
import img3 from './img/products_3.png'
import img4 from './img/products_4.png'
import img5 from './img/products_5.png'
import img6 from './img/products_6.png'
import img7 from './img/products_7.png'
import img8 from './img/products_8.png'
import img9 from './img/products_9.png'
import img from "./img/apple.svg"
import styles from "./product.module.scss";
import styles_prod from "../products.module.scss"
import { useState } from "react";

interface IElement {
    title: string,
    img: any,
    like: boolean,
    manufacturer: string,
    price: string | boolean,
    like_visible: boolean,
    logo_visible: boolean,
    id: string,
}

export interface IProduct {
    title: string,
    elements: Array<IElement>
}

interface ISettingModal {
    opened: boolean,
    setOpened: (value: React.SetStateAction<{
        open: boolean;
        id: number;
    }>) => void,
    changeOpened: (id: string) => void
}

function addEl (el:IElement) {
    const content = []
    const [checked, setChecked] = useState(false)

    const changeLike = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setChecked(!checked)
    }

    content.push(
        <div>
            <img className={styles.img} src={el.img.src} alt="" />
        </div>
    )

    if (el.like_visible) {
        content.push(
            <button onClick={changeLike} className={styles.button + " " + `${checked ? styles.button_active : ""}`}>
                <svg className={styles.like} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill} d="M10.001 1.88189C12.35 -0.227115 15.98 -0.157115 18.243 2.10989C20.505 4.37788 20.583 7.98989 18.479 10.3459L9.99901 18.8379L1.52101 10.3459C-0.582994 7.98989 -0.503994 4.37189 1.75701 2.10989C4.02201 -0.154115 7.64501 -0.230115 10.001 1.88189Z" fill="#1C1C27"/>
                    <path className={styles.stroke} d="M10.001 1.88189C12.35 -0.227115 15.98 -0.157115 18.243 2.10989C20.505 4.37788 20.583 7.98989 18.479 10.3459L9.99901 18.8379L1.52101 10.3459C-0.582994 7.98989 -0.503994 4.37189 1.75701 2.10989C4.02201 -0.154115 7.64501 -0.230115 10.001 1.88189ZM16.827 3.52289C15.327 2.02089 12.907 1.95989 11.337 3.36989L10.002 4.56789L8.66601 3.37089C7.09101 1.95889 4.67601 2.02089 3.17201 3.52489C1.68201 5.01488 1.60701 7.39989 2.98001 8.97589L10 16.0069L17.02 8.97688C18.394 7.39988 18.319 5.01789 16.827 3.52289Z" fill="#1C1C27"/>
                </svg>
            </button>
        )
    }

    if (el.logo_visible) {
        content.push(
            <span className={styles.logo}>
                <Image fill={true} className={styles.img} src={img} alt="" />
            </span>
        )
    }

    if (el.price != false) {
        content.push(
            <div className={styles.info}>
                <h3 className={styles.title}>{el.title}</h3>
                <span className={styles.price}>{el.price}</span>
             </div>
        )
    } else {
        content.push(
            <div className={styles.info_center}>
                <h3 className={styles.title}>{el.title}</h3>
             </div>
        )
    }

    return content
}

export function Product (props: {props: (e: any) => void}) {
    const changeOpened = props.props

    return (
        <ul className={styles_prod.list}>
            {bd.map(prod => (
                <li className={styles_prod.item} key={Math.random()}>
                    <h2 className={styles.heading}>{prod.title}</h2>
                    <ul className={styles.list} key={Math.random()}>
                        {prod.elements.map(el => (
                            <li className={styles.item} key={el.id}>
                                {addEl(el)}
                                <button id ={String(el.id)} onClick={changeOpened} className={styles.button_modal}></button>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}