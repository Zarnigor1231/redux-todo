import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editInfoBtn } from '../../redux/slice/todo'

// css
import './Modal.css'

function Modal({ setModal, edit , setEdit }) {
    // const [modalValue, setModalValue] = React.useState('')
    const dispatch = useDispatch()

    const modalChange = (value) => {
        // setModalValue(value)
        // dispatch(editInfoBtn(modalValue))
        setEdit({...edit , info:value})
     }

    const modalBtn = () => {
        // dispatch(edit)
         dispatch(editInfoBtn(edit))
        setModal(false)
    }

    const modalLink = () =>{
        setModal(false)
    }

    return (
        <div className='modal'>
            <h3 className='modal-title'>Description</h3>
            <input onChange={(e) => modalChange(e.target.value)} className='modal-inp' type="text" placeholder='Description' />
            <div className='modal-btns'>
                <button onClick={modalBtn} className='modal-btn'>Save</button>
                <Link onClick={modalLink} to='/' className='modal-link-btn'>
                    Cancel
                    {/* <button className='modal-btn'>Cancel</button> */}
                </Link>
            </div>
        </div>
    )
}

export default Modal