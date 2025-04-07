
import React from 'react'

import './App.css'
import { dataUser } from './types/dataUser'
import useFetch from './hooks/useFetch'
function App() {

  const [nameUser, setNameUser] = React.useState<string | null>('')

  const userGithub = useFetch<dataUser[]>(`http://api.github.com/users/leandromacedo117`)
  console.log(userGithub)




  return (
    <main className="flex justify-center items-center min-h-screen ">
      <form
        className="w-[1156px] h-[537px] bg-black flex flex-col items-center font-nunito"
        method="post"

      >
        <div className="pt-[39px] flex flex-col items-center gap-[27px] text-center w-full">
          <div className=" w-full flex justify-center  items-center gap-[11px] text-center">
            <img src="./logo.png" alt="Logo" className="w-[58px] h-[58px]" />
            <h1 className="text-[60px] font-semibold text-white">
              Perfil
            </h1>
            <span className=" text-[60px] font-bold text-white">GitHub</span>
          </div>

          <div className="relative w-[503px] h-[62px] flex justify-center items-center text-center">
            <input
              type="text"
              name="useName"
              className="w-full h-[62px] rounded-[10px] border border-[#DDDDDD] text-5 pl-4 text-black font-semibold placeholder:text-black"
              placeholder="Digite um usuário do Github"
            />
            <button className="flex justify-center items-center absolute top-0 right-0 w-[62px] h-[62px] rounded-[10px] border bg-[#005CFF] cursor-pointer">
              <img
                className='w-[25px] h-[25px]'
                src="./search.svg"
                alt="Ícone de busca"
              />
            </button>
          </div>
        </div>
      </form>
    </main>


  )
}

export default App
