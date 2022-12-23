import React from 'react';
import styles from './Preloader.module.css'
import Spinner from './Spinner';

const Preloader = ({ height }) => {
    return (
        <div style={{ height: `${height}` }} className={styles.preloader}>
            <div className={styles.spinner}>
                <Spinner />
            </div>
        </div>
    )
}

export default Preloader