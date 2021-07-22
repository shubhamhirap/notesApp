import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editNote } from '../../actions'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Formgroup from '../../components/FormGroup/Formgroup'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import Textarea from '../../components/Textarea/Textarea'
import "./editnote.scss"

const EditNote = (props) => {

    const state = useSelector(state => state)
    const { id } = useParams()

    let filteredData = state.filter(note => note.id === id)

    const [title, setTitle] = useState(filteredData[0].title)
    const [content, setContent] = useState(filteredData[0].content)

    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(editNote({ id: id, title: title, content: content }))
            setTitle("")
            setContent("")
            props.history.push('/')
        } else {
            alert('Title and Content both are mandatory')
        }
    }

    return (
        <div className={`form-container`}>
            <Form>
                <div className={`label-container`}>
                    <Label id={`form-heading`} className={`sub-heading semi-bold`} text={`Edit a Note`} />
                </div>
                <Formgroup>
                    <Label id={`title`} className={`normal`} text={`Note Title: `} />
                    <Input id={`title`} name={`title`} value={title} onChange={(e) => setTitle(e.target.value)} />
                </Formgroup>
                <Formgroup>
                    <Label id={`content`} className={`normal`} text={`Note Content: `} />
                    <Textarea id={`content`} name={`content`} value={content} onChange={(e) => setContent(e.target.value)} />
                </Formgroup>
                <Button type={`submit`} className={`primary`} label={`UPDATE`} onClick={(e) => handleUpdate(e)} />
            </Form>
        </div>
    )
}

export default EditNote
