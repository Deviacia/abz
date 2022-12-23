import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, nextPage, resetList } from '../../../store/usersSlice'
import { fetchToken } from '../../../store/tokenSlice'
import { Button, Preloader } from '../../UI'
import Card from '../../Card/Card'
import styles from './getSection.module.scss'

const GetSection = () => {
    const dispatch = useDispatch()
    const { list, page, totalPages, loading, error } = useSelector(({ users }) => users)

    // const effectRan = useRef(false)

    useEffect(() => {
        // if (effectRan.current === false) {
        //     return () => {
        //         effectRan.current = true
        //     }
        // }

        dispatch(fetchToken())
        dispatch(fetchUsers(page))
    }, [page])

    return (
        <div className={styles.get}>
            <h1>Working with GET request</h1>

            {loading ? <Preloader height={'100%'} /> : null}

            {error ? <p>{error}</p> : null}

            <div className={styles.block}>
                <div className={styles.grid}>
                    {
                        list.map(user =>
                            <Card
                                key={user.id}
                                user={user}
                            />
                        )
                    }
                </div>

                {
                    page < totalPages ?
                        <Button onClick={() => dispatch(nextPage())}>
                            Load more
                        </Button>
                        : null
                }
            </div>
        </div>
    )
}

export default GetSection