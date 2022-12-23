import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPositions, postUser } from '../../store/formSlice'
import { addUser } from '../../store/usersSlice'
import { useInput } from '../../hooks/useInput'
import { Button, Input, Radio, UploadFile } from '../UI'
import avatar from './avatar.svg'
import styles from './postForm.module.scss'

const PostForm = () => {
    const dispatch = useDispatch()
    const { positions } = useSelector(({ form }) => form)
    const { token } = useSelector(({ token }) => token)

    useEffect(() => {
        dispatch(fetchPositions())
    }, [])

    const [radio, setRadio] = useState(1)
    const photoRef = useRef(null)
    const nameValid = useInput('', { isEmpty: true, minLength: 2, maxLength: 60 })
    const emailValid = useInput('', { isEmpty: true, minLength: 2, maxLength: 100 })
    const phoneValid = useInput('', { isEmpty: true, })

    async function handleSignUp(e) {
        e.preventDefault()

        let formData = new FormData();

        formData.append('position_id', radio);
        formData.append('name', nameValid.value);
        formData.append('email', emailValid.value);
        formData.append('phone', phoneValid.value);
        formData.append('photo', photoRef.current.files[0]);

        if (
            radio &&
            nameValid.isValid &&
            emailValid.isValid &&
            phoneValid.isValid &&
            photoRef.current.files[0]
        ) {
            const user = {
                radio: radio,
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                photo: formData.get('photo'),
            }

            dispatch(postUser({ user: formData, token: token }))
            dispatch(addUser({ ...user, id: uuidv4(), photo: avatar }))
        } else {
            console.error('Something went wrong');
        }
    }

    return (
        <form className={styles.form}>
            <fieldset className={styles.form__contact}>
                <Input
                    id='name'
                    placeholder='Name'
                    required
                    onChange={e => nameValid.onChange(e)}
                    onBlur={e => nameValid.onBlur(e)}
                    value={nameValid.value}
                    error={(nameValid.isDirty && nameValid.isEmpty) ? 'name error' : null}
                />
                <Input
                    id='email'
                    placeholder='Email'
                    type='email'
                    required
                    onChange={e => emailValid.onChange(e)}
                    onBlur={e => emailValid.onBlur(e)}
                    value={emailValid.value}
                    error={(emailValid.isDirty && emailValid.isEmpty) ? 'email error' : null}
                />
                <Input
                    id='phone'
                    placeholder='Phone'
                    type='tel'
                    required
                    onChange={e => phoneValid.onChange(e)}
                    onBlur={e => phoneValid.onBlur(e)}
                    value={phoneValid.value}
                    error={(phoneValid.isDirty && phoneValid.isEmpty) ? 'phone error' : null}
                />
            </fieldset>

            <fieldset className={styles.form__positions}>
                {
                    positions.map(position =>
                        <Radio
                            name='positions'
                            key={position.id}
                            id={position.id}
                            label={position.name}
                            checked={radio === position.id}
                            onChange={() => setRadio(position.id)}
                        />
                    )
                }
            </fieldset>

            <div className={styles.form__file}>
                <UploadFile ref={photoRef} accept='file/jpeg' />
            </div>

            <div>
                <Button onClick={(e) => handleSignUp(e)}>Sign up</Button>
            </div>
        </form>
    )
}

export default PostForm