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
        <div className='flex justify-center items-center w-[710px] h-[88px] bg-[#D9D9D9] rounded-[10px]  '>
            <p className=' font-normal text-5 text-[#FF0000] font-nunuto text-center'>
                Nenhum perfil foi encontrado com ese nome de usuário.  <br />Tente novamente
            </p>
        </div>
    )




    return (
        <div className='w-[804px] h-[257px] bg-[#D9D9D9]  rounded-[25px] py-[19px]'>
            <div className='flex justify-start items-center gap-8  pl-[33px]'>
                <img
                    src={user?.avatar_url}
                    alt="Avatar"
                    className='w-[220px] h-[220px] border-2 border-[#005CFF] rounded-[50%]'

                />
                <div className='flex flex-col font-nunuto  '>
                    <h5 className='text-5 font-bold text-[#005CFF] pb-4'>{user?.name}</h5>
                    <p className=' text-[15px] font-light text-black'>{user?.bio || 'Sem biografia disponível'}</p>
                </div>
            </div>
        </div>
    )

}
