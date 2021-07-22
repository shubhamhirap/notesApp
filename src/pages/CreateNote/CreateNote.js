import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../actions'
import uuid from 'react-uuid';
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Formgroup from '../../components/FormGroup/Formgroup'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import Textarea from '../../components/Textarea/Textarea'
import "./createnote.scss"

const CreateNote = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(createNote({ id: uuid(), title: title, content: content }))
            setTitle("")
            setContent("")
        } else {
            alert('Title and Content both are mandatory')
        }
    }

    return (
        <div className={`form-container`}>
            <Form>
                <div className={`label-container`}>
                    <Label id={`form-heading`} className={`sub-heading semi-bold`} text={`Keep a Note`} />
                </div>
                <Formgroup>
                    <Label id={`title`} className={`normal`} text={`Note Title: `} />
                    <Input id={`title`} name={`title`} value={title} onChange={(e) => setTitle(e.target.value)} />
                </Formgroup>
                <Formgroup>
                    <Label id={`content`} className={`normal`} text={`Note Content: `} />
                    <Textarea id={`content`} name={`content`} value={content} onChange={(e) => setContent(e.target.value)} />
                </Formgroup>
                <Button type={`submit`} className={`primary`} label={`SUBMIT`} onClick={(e) => handleSubmit(e)} />
            </Form>
        </div>
    )
}

export default CreateNote
