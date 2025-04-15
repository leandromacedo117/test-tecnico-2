import React from 'react'
import { useUi } from '../context/Uicontext'
import { dataUser } from '../types/dataUser'
import useFetch from '../hooks/useFetch'


interface Props {
    user?: dataUser
    error?: string
}


export default function SearchUser({ user, error }: Props) {

    if (error) return (
        <div className='flex justify-center items-center  w-full max-w-[710px] h-full max-h-[88px] bg-[#D9D9D9] rounded-[10px]  '>
            <p className=' font-normal text-5 text-[#FF0000] font-nunuto text-center'>
                Nenhum perfil foi encontrado com esse nome de usuário.  <br />Tente novamente
            </p>
        </div>
    )




    return (
        <div className=' w-full max-w-[804px] h-full  max-h-[257px]  bg-[#D9D9D9]  rounded-[25px] py-[19px]'>
            <div className=' flex-col md:flex-row flex justify-start items-center gap-3 md:gap-8  md:pl-[33px]'>
                <img
                    src={user?.avatar_url}
                    alt="Avatar"
                    className='w-full max-w-[110px] md:max-w-[220px] h-fulll max-h-[110px] md:max-h-[220px] border-2 border-[#005CFF] rounded-[50%]'

                />
                <div className='flex flex-col font-nunuto pl-4 md:pl-0 '>
                    <h5 className='text-5 font-bold text-[#005CFF] pb-4  text-center md:text-left'>{user?.name}</h5>
                    <p className=' w-full max-w-[448px] h-full  max-h-[80px]  text-[11px] sm:text-[13px] md:text-[15px] font-light text-black'>{user?.bio || 'Sem biografia disponível'}</p>
                </div>
            </div>
        </div>
    )

}
