import React, { useState } from 'react'
import styles from './input.module.scss'

const Input = ({ id, type, placeholder, error, ...props }) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} onBlur={() => setIsFocused(prev => !prev)}>
                <input
                    className={styles.field}
                    placeholder=' '
                    type={type || 'text'}
                    {...props}
                />
                <label
                    className={styles.label}
                >
                    {placeholder}
                </label>
            </div>
            {error ? <p className={styles.error}>{error}</p> : null}
        </div>
    )
}

export default Input