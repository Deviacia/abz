import React from 'react'
import Portal from '../../Portal/Portal'
import styles from './tooltip.module.scss'

const Tooltip = ({ children }) => {
    return (
        // Portal, postition: relative 
        <div className={styles.tooltip}>
            {children}
        </div>
    )
}

export default Tooltip