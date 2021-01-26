import Axios from 'axios'
import React, {useState} from 'react'
import {useEffect} from 'react'

export default  function GamesApi() {
    
    const [games, setGames] = useState([])

    const getGames = async () => {
        const res = await Axios.get('http://localhost:5000/games')
        setGames(res.data)
    }
    useEffect(() => {
        getGames()
    }, [])
    
    return {
        Games: [games, setGames]
    }
}
