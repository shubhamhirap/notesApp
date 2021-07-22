import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, editNote } from '../../actions'
import Button from '../../components/Button/Button'
import Card from "../../components/Card/Card"
import Label from '../../components/Label/Label'
import "./notes.scss"

const Notes = (props) => {

    const state = useSelector(state => state)

    const dispatch = useDispatch()

    return (
        <div className={`card-container`}>
            {state.length !== 0 ? state.map(
                note => (
                    <Card key={note.id}>
                        <Label className={`sub-heading semi-bold`} text={note.title} />
                        <p>{note.content}</p>

                        <div className="button-section">
                            <Button className={`warning small`} label={`Edit`} onClick={() => props.history.push(`/edit/${note.id}`)} />
                            <Button className={`danger small`} label={`Delete`} onClick={() => dispatch(deleteNote(note.id))} />
                        </div>
                    </Card>
                )
            ) : <h3>Please Create a note</h3>
            }
        </div>
    )
}

export default Notes
