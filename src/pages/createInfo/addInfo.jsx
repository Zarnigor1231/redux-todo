import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addInfoBtn } from '../../redux/slice/todo'

// css
import './addInfo.css'

function AddInfo() {
    const dispatch = useDispatch()

    const [ value , setValue ] = React.useState('')

    const add = () =>{
        dispatch(addInfoBtn(value))
        setValue('')
    }

    return (
        <div className='add-info'>
            <h2 className='add-info-title'>Create New Info</h2>
            <div className='add-info-list'>
                <div className='add-info-item'>
                    <input onChange={(e) => setValue(e.target.value)}  value={value} className='add-info-item-inp' type="text" placeholder='New Info' />
                    {/* <Link to='/'> */}
                        <button onClick={add} className='add-info-item-btn'>Create</button>
                    {/* </Link> */}
                </div>
                <Link className='add-info-router-link' to='/'>Cancle</Link>
            </div>
        </div>
    )
}

export default AddInfo