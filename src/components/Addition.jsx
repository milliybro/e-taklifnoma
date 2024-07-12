import React from 'react'

const Addition = () => {
  return (
    <div className='container pb-[70px] mt-[120px]'>
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 items-center'>
         <div className='flex flex-col justify-center items-center'>
            <img width={35} height={35} alt='img' src='/images/brush.png' />
            <h3 className='text-3xl py-1 text-center'>Mualliflik dizaynlari</h3>
            <p className='text-center text-[#000000A0]'>Dizaynni tanlang va taklifnomangizni yaratishni boshlang.</p>
         </div>
         <div className='flex flex-col justify-center items-center'>
            <img width={35} height={35} alt='img' src='/images/speed.png' />
            <h3 className='text-3xl py-1'>Tez yaratish</h3>
            <p className='text-center text-[#000000A0]'>Taklifnomani bir necha sekund ichida yuklab olish mumkin.</p>
         </div>
         <div className='flex flex-col justify-center items-center'>
            <img width={35} height={35} alt='img' src='/images/24.png' />
            <h3 className='text-3xl py-1'>24/7 xizmat</h3>
            <p className='text-center text-[#000000A0]'>Taklifnomani tun-u kun hohlagan vaqtingizda yarating.</p>
         </div>
      </div>
    </div>
  )
}

export default Addition