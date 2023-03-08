import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { delInfoBtn } from '../../redux/slice/todo'
import { Modal } from '../../Components'
import { saveState } from '../../hooks/localstorage'
import  Store from '../../redux/store'

// css
import './home.css'

// img
import deleteBtnImg from './img/delete.svg'
import addBtnImg from './img/add.svg'
import editBtnImg from './img/edit.svg'


Store.subscribe(() => {
    saveState("Todo" , Store.getState().Todo)
})


let trueFalse = false

function Home() {
    const Todo = useSelector(state => state.Todo);
    const [add, setAdd] = React.useState(trueFalse)
    const [ modal , setModal ] = React.useState(false)
    const [ edit , setEdit ] = React.useState({})
    
    console.log(Todo)

    const dispatch = useDispatch()

    const addInfo = () => {
        setAdd(trueFalse = true)
    }

    const deleteBtn = (id) => {
        dispatch(delInfoBtn(id))
    }

    const editBtn = (id) => {
        setEdit({...edit , id:id})
        setModal(true)
        
    }

    return (

        <Container >

            <div className='flex home'>
                <div className='ctete-new-info'>
                    {
                        Todo.length ?
                            <div>
                                <h2 className='info-to-do-add'>To Do Info</h2>
                                <ul className='to-do-item-map'>
                                    {
                                        Todo?.map((item, id) =>
                                            <li className='to-do-item-key' key={id}>
                                                {/* <p className='to-do-item-id'>{item.id} .</p> */}
                                                <h3 className='to-do-item-info'>{item.info}</h3>
                                                <button onClick={() => deleteBtn(item.id)} className='to-do-icon-btn'>
                                                    <img src={deleteBtnImg} alt="Delete Button" />
                                                </button>
                                            </li>
                                            //   console.log(item.info)
                                        )
                                    }
                                </ul>
                            </div>
                            :
                            ''
                    }
                    <Link to='/addInfo' className='create-new-info-link'>
                        <button className='ctete-new-info-btn'>Create New Info</button>
                    </Link>
                </div>
                <div className='info-to-do'>
                    {
                        Todo.length ?
                            <div className='list-info'>
                                <h2 className='info-to-do-title'>List Info</h2>
                                {
                                    add ?
                                        <ul className='to-do-item-map'>
                                            {
                                                Todo?.map((item, id) =>
                                                    <li className='to-do-item-key' key={id}>
                                                        <div className='item-key-box'>
                                                            <p className='to-do-item-id'>{item.id} .</p>
                                                            <h3 className='to-do-item-info'>{item.info}</h3>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => editBtn(item.id)} className='to-do-icon-btn'>
                                                                <img src={editBtnImg} width='21' height='25' alt="Delete Button" />
                                                            </button>
                                                            <button onClick={() => deleteBtn(item.id)} className='to-do-icon-btn deletebtn'>
                                                                <img src={deleteBtnImg} width='21' height='25' alt="Delete Button" />
                                                            </button>
                                                        </div>
                                                    </li>
                                                    //   console.log(item.info)
                                                )
                                            }
                                        </ul>
                                        :
                                        ''
                                }
                                {
                                    modal? <Modal setModal = {setModal} edit= {edit} setEdit = {setEdit} /> : ''
                                }
                                <button onClick={addInfo} className='info-list-btn'>
                                    <img src={addBtnImg} alt="Add Btn" />
                                </button>

                            </div>
                            :
                            <div>
                                <h2 className='info-to-do-title'>Info List To Do</h2>
                            </div>

                    }
                    {/* <h2 className='info-to-do-title'>Info List To Do</h2>
                    <h2 className='info-to-do-title'>Description</h2> */}
                    {/* <button className='create-new-info-icon-btn'>
                       <i class="fa-thin fa-plus create-new-info-icon"></i>
                    </button> */}
                </div>
            </div>

        </Container>

    )
}

export default Home