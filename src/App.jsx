import { useState } from 'react'
import Characters from './components/Characters'
import Music from './components/Music'
import logo from './logo.png'
import { random } from '../helpers'
import { deleteSpace } from '../helpers'

function App() {

  const [characters, setCharacters] = useState([])
  const [charactersImg, setCharactersImg] = useState([])

  const consultAPI = async () =>{
    const url = await fetch(`https://swapi.dev/api/people/${random()}`)
    const character = await url.json()
    setCharacters(character)
    setCharactersImg(deleteSpace(character.name))
  }

  return (
    <div>
        <img 
        className='block mx-auto'
        src={logo} 
        alt="logo" 
        />
        <Characters
          characters={characters}
          charactersImg={charactersImg}
          />

        <button 
          className=' bg-yellow-400 p-2 hover:bg-yellow-600 font-sans rounded-md shadow-md block mx-auto text-2xl'
          onClick={consultAPI}
          >
          Generar Personaje
        </button>
        <Music
        />
    </div>
  )
}
export default App
