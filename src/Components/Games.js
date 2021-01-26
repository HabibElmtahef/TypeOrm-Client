import React from 'react'
import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {GlobaleState} from '../GlobalState'
import GameItem from './GameItem'
import Swal from 'sweetalert2'
import axios from 'axios'


const Games = () => {
    const history = useHistory()
    const state = useContext(GlobaleState)
    const [games, setGames] = state.GamesAPI.Games
    console.log(games)
    
    const UpdateGame = (id) => {
        history.push(`/game/${id}`)
    }
    
    const deleteGame = (id) => {
        Swal.fire({
  title: 'Are you sure?',
  text: "You won't be Delete this Game!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
      axios.delete(`http://localhost:5000/game/${id}`)
      setGames(games.filter(item => item.id != id))
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
    }

    return (
        <div className="row py-5">
            {games.map(item => (
                <GameItem key={item.id} Game={item} UpdateGame={UpdateGame} DeleteGame={deleteGame} />
            ))}
        </div>
    )
}

export default Games
