import React from "react";
import styles from "./authorization.module.scss"
import { useState } from "react";

interface IAccount {
    login: string,
    password: string
}

const ACCOUNTS: IAccount[] = [
    {
        login: "knilpt2007@gmail.com",
        password: "12d2ca1"
    },
    {
        login: "betepok",
        password: "12345"
    }
]

interface ISettings {
    error: boolean;
    errorMessage: string;
}

type TFunc = React.Dispatch<React.SetStateAction<{
    error: boolean;
    errorMessage: string;
}>>

const checkInputLog = (e: React.FocusEvent<HTMLInputElement, Element> | HTMLInputElement, func: TFunc) => {
    const value: string = e instanceof HTMLInputElement ? e.value : e.target.value
    const data: IAccount[] = ACCOUNTS

    if (value === "") {
        func({
            error: true,
            errorMessage: "Поле не может быть пустым",
        })
    } else {
        func({
            error: false,
            errorMessage: "",
        })

        for (const el of data) {
            if (el.login === value) {
                func({
                    error: false,
                    errorMessage: "",
                })
                break
            } else {
                func({
                    error: true,
                    errorMessage: "Неправильный логин",
                })
            }
        }
    }
}

const checkInputPas = (e: React.FocusEvent<HTMLInputElement, Element> | HTMLInputElement, func: TFunc) => {
    const value: string = e instanceof HTMLInputElement ? e.value : e.target.value
    const data: IAccount[] = ACCOUNTS

    if (value === "") {
        func({
            error: true,
            errorMessage: "Поле не может быть пустым",
        })
    } else {
        func({
            error: false,
            errorMessage: "",
        })

        for (const el of data) {
            if (el.password === value) {
                func({
                    error: false,
                    errorMessage: "",
                })
                break
            } else {
                func({
                    error: true,
                    errorMessage: "Неправильный пароль",
                })
            }
        }
    }
}

const createError = (settings: ISettings) => {
    return (
        <span className={styles.error}>{settings.errorMessage}</span>
    )
}

const buttonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> , funcs: TFunc[], [correct1, correct2]: boolean[]) => {
    e.preventDefault()
    const login = document.getElementById("login")
    const password = document.getElementById("password")

    if (login instanceof HTMLInputElement) {
        checkInputLog(login, funcs[0])
    }

    if (password instanceof HTMLInputElement) {
        checkInputPas(password, funcs[1])
    }

    if (!correct1 && !correct2) {
        window.location.href = "./rstore"
    }
}

export function Authorization () {
    const [checkErrorLog, setCheckedErrorLog] = useState({
        error: true,
        errorMessage: "",
    })

    const [checkErrorPas, setCheckedErrorPas] = useState({
        error: true,
        errorMessage: "",
    })

    return (
        <div className={styles.content}>
            <form className={styles.form} action="GET">
                <h2 className={styles.heading}>ВХОД</h2>

                <ul className={styles.list}>
                    <li key={1} className={styles.item}>
                        {checkErrorLog.error ? createError(checkErrorLog) : ""}
                        <input id="login" onBlur={(e) => {checkInputLog(e, setCheckedErrorLog)}} className={styles.input} type="text" placeholder="Логин"/>
                    </li>
                    <li key={2} className={styles.item}>
                        {checkErrorPas.error ? createError(checkErrorPas) : ""}
                        <input id="password" onBlur={(e) => {checkInputPas(e, setCheckedErrorPas)}} className={styles.input} type="text" placeholder="Пароль"/>
                    </li>
                </ul>

                <button onClick={(e) => {buttonClick(e, [setCheckedErrorLog, setCheckedErrorPas], [checkErrorLog.error, checkErrorPas.error])}} className={styles.button}>Войти</button>
            </form>
        </div>
    )
}