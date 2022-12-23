import React from 'react'
import styles from './radio.module.scss'

const Radio = ({ id, name, label, ...props }) => {
    return (
        <div className={styles.container}>
            <input
                id={id}
                name={name}
                type='radio'
                className={styles.radio}
                {...props}
            />
            <label
                htmlFor={id}
                className={styles.label}
            >
                {label}
            </label>
        </div>
    )
}

export default Radio