import axios from 'axios';
import React, {useContext} from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {GlobaleState} from '../GlobalState';
import {motion} from 'framer-motion'


const CreateGame = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState('')
    const state = useContext(GlobaleState)
    const [games, setGames] = state.GamesAPI.Games

    const addGame = async (e) => {
        e.preventDefault();
        
            const res = await axios.post('http://localhost:5000/add', {
                name: name,
                description: description,
                genre: genre,
                image: image
            })
            console.log(res.data)
            if (!res.data.msg) {
                setGames([...games, res.data])
                toast.success("Game Added")
                games.push(res.data) 
                history.push('/')
            }
            else toast.error(res.data.msg)        
    }

    return (
        <>
            <h2 className="py-3 text-center">Create Game</h2>
            <div className="row py-3">
                <motion.div className="col-md-5 offset-md-2"
                  initial={{x: -200}}
                  animate={{x: 0}}
                  transition={{duration: 0.5}}
                >
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={addGame}>
                                <div className="form-group pb-3">
                                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="form-control"/>
                                </div>
                                <div className="form-group pb-3">
                                    <textarea type="text" placeholder="Description" rows="3" value={description} onChange={e => setDescription(e.target.value)} className="form-control"/>
                                </div>
                                <div className="form-group pb-3">
                                    <input type="text" placeholder="Genre" value={genre} onChange={e => setGenre(e.target.value)} className="form-control"/>
                                </div>
                                <div className="form-group pb-3">
                                    <textarea type="text" placeholder="Image" value={image} rows="2" onChange={e => setImage(e.target.value)} className="form-control"/>
                                </div>
                            <button className="btn btn-success btn-block mx-auto">Add Game</button>
                            </form>
                        </div>
                    </div>
                </motion.div> 
                <motion.div className="col-md-4"
                initial={{x: 200}}
                  animate={{x: 0}}
                  transition={{duration: 0.5}}
                >
                    <div className="card card-body text-center">
                        <img src={image === '' ? 'https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg' : image } alt="" className="card-img-top" style={{height:"320px", objectFit:"contain"}} />
                        <h3> {name === '' ? 'Write an Name for The Game' : name} </h3>
                        <p> {description === '' ? 'Write Description for This Game' : description} </p>
                        <h5> {genre === '' ? "Genre the Game ?" : genre} </h5>
                    </div>
                </motion.div>
            </div>
            
        </>
    )
}

export default CreateGame
