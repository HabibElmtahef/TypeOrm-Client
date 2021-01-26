import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
const GameItem = ({Game, DeleteGame, UpdateGame}) => {
    return (
        <motion.div className="col-md-4 pb-3" 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.6}}
        >
            <div className="card text-center" style={{boxShadow:"1px 1px 4px rgba(0,0,0,.25)", borderRadius:"20px"}} >
                <div className="card-header bg-dark text-white justify-content-center">
                    <Link to={`/detail/${Game.id}`} style={{color: "white"}} >{Game.name} </Link>
                    <button className="btn btn-danger ms-5" onClick={() => DeleteGame(Game.id)}>
                        <i className="far fas fa-trash-alt"></i>
                    </button>
                </div>
                <Link to={`/detail/${Game.id}`} ><img src={Game.image} alt="" className="card-image-top" style={{height:"230px", objectFit: "inherit"}} /></Link>
                <div className="card-body">
                    <p> {Game.description} </p>
                    <button className="btn  btn-block" style={{backgroundColor: "gold"}} onClick={() => UpdateGame(Game.id)}>Edit Game</button>
                </div>
            </div>
        </motion.div>
    )
}

export default GameItem
