import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {motion} from 'framer-motion'
import Axios from 'axios'

const GameDetail = () => {
    const params = useParams()
    const [game, setGame] = useState([])
    console.log(params)
    useEffect(() => {
       const getGame = async () => {
            const res = await Axios.get(`http://localhost:5000/game/${params.id}`)
            setGame(res.data)
       }
       getGame()
    }, [])   
    return (
        <div className="row py-4">
           <motion.div className="col-md-6" initial={{x: -200}} animate={{x: 0}} transition={{duration: 0.6}}>
               <img src={game.image} alt="" className="w-100 " style={{height: "500px", borderRadius: "15px", boxShadow:"4px 4px 4px 4px rgba(0,0,0,.15)"}} />
           </motion.div>
           <motion.div className="col-md-6" initial={{x: 200}} animate={{x: 0}} transition={{duration: 0.6}}>
               <h2 className="pb-3" style={{fontSize: "36px", fontWeight: "700"}} > {game.name} </h2>
               <p className="pb-3"> <span style={{fontWeight:"600"}} >Description : </span> {game.description} </p>
           </motion.div>

        </div>
    )
}

export default GameDetail
