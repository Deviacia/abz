import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostForm from '../../PostForm/PostForm'
import successImg from './success-image.svg'
import styles from './postSection.module.scss'

const PostSection = () => {
    const dispatch = useDispatch()
    const { isSuccess } = useSelector(({ form }) => form)

    return (
        <div className={styles.post}>
            <h1>Working with POST request</h1>

            <div className={styles.container}>
                {
                    isSuccess
                        ? <img src={successImg} alt="User was created" />
                        : <PostForm />
                }
            </div>
        </div>
    )
}

export default PostSection