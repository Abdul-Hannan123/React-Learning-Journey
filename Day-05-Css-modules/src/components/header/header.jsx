import React from 'react'
import styles from '../header/header.module.css'


const header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <button className={styles.btn}>Hello</button>
        </div>
    )
}

export default header
