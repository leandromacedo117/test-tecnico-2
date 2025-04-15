import React, { FormEvent, useState } from 'react'
import './App.css'
import { dataUser } from './types/dataUser'
import useFetch from './hooks/useFetch'
import SearchUser from './components/SearchUser'
import IMG from './assets/bg.svg'

function App() {
  const [username, setUsername] = useState('')
  const [url, setUrl] = useState('')

  const { data: user, loading, error } = useFetch<dataUser>(url)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      setUrl(`https://api.github.com/users/${username.trim()}`)
    }

  }

  return (
    <main className=" bg-[rgb(31,31,31)] p-5 md:p-0 " style={{position: 'relative'}}>
      <div className='fixed inset-0 w-full h-full z-0 ' >
        <img src={IMG} className=' w-full h-full object-cover ' />
      </div>
      <div className='flex justify-center items-center min-h-screen relative z-10' >
      <form
        className=" w-full max-w-[1156px] h-[537px]  bg-black flex flex-col items-center font-nunuto p-5 md:p-0"
        onSubmit={handleSubmit}
      >
        <div className="w-full pt-[39px] flex flex-col items-center gap-[27px] text-center pb-[33px]">
          <div className="w-full flex justify-center items-center gap-[11px] text-center">
            <img src="./logo.png" alt="Logo" className="w-[58px] h-[58px]" />
            <h1 className="text-3xl md:text-[60px] font-semibold text-white">Perfil</h1>
            <span className="text-3xl md:text-[60px] font-bold text-white">GitHub</span>
          </div>

          <div className="relative  w-full max-w-60 md:max-w-[503px]   max-h-[62px] flex justify-center  items-center text-center">
            <input
              type="text"
              className="w-full max-w-full h-[62px] rounded-[10px] border border-[#DDDDDD] text-5 pl-2 md:pl-4 text-black font-semibold placeholder:text-black"
              placeholder="Digite um usuário do Github"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              type="submit"
              className="flex justify-center items-center absolute top-0 right-0 w-[62px] h-[62px] rounded-[10px] border bg-[#005CFF] cursor-pointer"
            >
              <img
                className="w-[25px] h-[25px]"
                src="./search.svg"
                alt="Ícone de busca"
              />
            </button>
          </div>
        </div>

        {loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg animate-pulse">
              <span className="text-blue-500 text-lg">Carregando...</span>
            </div>
          </div>
        )}

        {error ? (
          error && <SearchUser error={error} />
        ) : (
          user && <SearchUser user={user} />
        )}


      </form>
      </div>
    </main>
  )
}

export default App