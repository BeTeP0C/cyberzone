import React from 'react';
import styles from "./header.module.scss"
import { Account } from "./Account"
import { Logo } from './Logo';

export function Header (props: {open: boolean}) {
    return (
        <header className={styles.header}>
            <Logo />
            <Account open={props.open}/>
        </header>
    )
}