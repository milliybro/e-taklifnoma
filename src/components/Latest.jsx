import React from 'react'
import { useNavigate } from 'react-router-dom';
import Title from './ui/Title';

const Latest = () => {
   const navigate = useNavigate();
  return (
    <div className="container py-[60px]">
      <Title title="Oxirgi taklifnomalar" />
      <div className='pt-[20px] grid grid-cols-3'>
         <div className='border-slate-500 border-[1px] p-4'>

      <h3 className="text-2xl pb-3">Muhiddin Va Azizaning to'y taklifnomasi</h3>
      <button className="border-[#cccccc] text-white p-3 bg-hoverColor" onClick={() => navigate("/invitation/muhiddin&aziza")}>
    Taklifnomani ko'rish
  </button>
         </div>
      </div>
  </div>
  )
}

export default Latest