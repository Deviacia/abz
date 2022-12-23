import React, { forwardRef, useState } from 'react'
import styles from './uploadFile.module.scss'

const UploadFile = forwardRef(({ accept, error, ...props }, ref) => {
    const [isFileUploaded, setIsFileUploaded] = useState(false)
    const [fileName, setFileName] = useState(null)

    function handleUpload(e) {
        console.log(e);

        setIsFileUploaded(true)
        setFileName(e.name)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <input
                    ref={ref}
                    id='file'
                    type='file'
                    accept={accept}
                    className={styles.file}
                    onChange={(e) => handleUpload(e.target.files[0])}
                    {...props}
                />
                <button
                    type='button'
                    className={styles.button}
                >
                    Upload
                </button>
                <label
                    htmlFor='file'
                    className={styles.label_wrapper}
                >
                    <span className={styles.label}>
                        {isFileUploaded ? fileName : 'Upload your photo'}
                    </span>
                </label>
            </div>
            {error ? <p className={styles.error}>{error}</p> : null}
        </div>
    )
})

export default UploadFile