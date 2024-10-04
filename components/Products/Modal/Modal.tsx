import React from "react";
import styles from "./modal.module.scss"
import Image from "next/image";
import { useEffect } from "react";
import { bd } from "../Product/bd";

interface ISettingModal {
    opened: {
        open: boolean,
        id: string
    },
    setOpened: (value: React.SetStateAction<{
        open: boolean;
        id: string;
    }>) => void,
}

function getPrice (price: string) {
    return (
        <span className={styles.price}>{price}</span>
    )
}

function getModal (id: string) {
    const content: JSX.Element[] = []

    bd.map((el) => {
        for (const ele of el.elements) {
            if (ele.id === id) {
                content.push(
                    <>
                        {/* <Image /> */}
                        <img className={styles.img} src={ele.img.src} alt="" />
                        <div className={styles.info + "" + `${ele.price ? "" : styles.centering}`}>
                            <h3 className={styles.title}>{ele.title}</h3>
                            {typeof ele.price === "string" ? getPrice(ele.price) : ''}    
                        </div>
                    </>
                )
            }
        }
    })

    return content
}

function closeModal (setting: ISettingModal) {
    setting.setOpened({
        open: !setting.opened.open,
        id: setting.opened.id
    })

    document.body.style.overflowY = "scroll"
    // document.body.style.paddingTop = w
    document.body.style.height = "auto"
}   

// const changeBodyModalOpen = () => {
//     // const windowOffset = window.scrollY

//     // document.body.setAttribute("style", `position: fixed; top: -${windowOffset}px; left: 0; right: 0`)
//     // document.querySelector("html")?.style.overflowY = "hidden"
// }

// const resetBody = () => {
//     // document.body.scrollTo()
//     // document.body.setAttribute("style", `position: block; top: ; left: auto; right: auto`)
// }


export function Modal (props:{props: ISettingModal}) {
    const setting = props.props

    const closeEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeModal(setting)
        }
    }

    const closeClick = (e: MouseEvent) => {
        const overlay = document.getElementById("overlay")
        if (e.target === overlay) {
            closeModal(setting)
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", closeEsc)
        window.addEventListener("click", closeClick)

        // setting.opened.open ? changeBodyModalOpen() : resetBody()

        return () => {
            window.removeEventListener("keydown", closeEsc)
            window.removeEventListener("click", closeClick)
        }
    })

    return (
        <div id="overlay" className={styles.overlay + " " + `${setting.opened.open ? styles.overlay_visible : ''}`}>
            <div className={styles.content}>
                <button onClick={() => {closeModal(setting)}} className={styles.close}></button>
                {setting.opened.open ? getModal(setting.opened.id): ""}
                
            </div>
        </div>
    )
}