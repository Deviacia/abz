import React from 'react'
import Tooltip from '../UI/Tooltip/Tooltip'
import avatar from './photo-cover.svg'
import styles from './card.module.scss'

const Card = ({ user }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__container}>
                <img
                    alt="avatar"
                    src={user.photo || avatar}
                    className={styles.card__avatar}
                />
                <div className={styles.card__row}>
                    <p className={styles.card__text}>
                        {user.name}
                    </p>
                </div>
                <div className={styles.card__row}>
                    <p className={styles.card__text}>
                        {user.position}
                    </p>
                    <p className={styles.card__text}>
                        {user.email}
                    </p>
                    <p className={styles.card__text}>
                        {user.phone}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card