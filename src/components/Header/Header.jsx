import React from 'react'
import Container from '../Container/Container'
import { Button } from '../UI'
import logo from './logo.svg'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <Container>
                    <div className={styles.header__nav}>
                        <img src={logo} alt='logo' />
                        <div className={styles.header__buttons}>
                            <Button>Users</Button>
                            <Button>Sign up</Button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className={styles.header__cover}>
                <div className={styles.header__hero}>
                    <h1>Test assignment for front-end developer</h1>
                    <p>
                        What defines a good front-end developer is one that
                        has skilled knowledge of HTML, CSS, JS with a vast understanding
                        of User design thinking as they'll be building web interfaces
                        with accessibility in mind. They should also be excited to learn,
                        as the world of Front-End Development keeps evolving.
                    </p>
                    <Button>Sign up</Button>
                </div>
            </div>
        </header>
    )
}

export default Header