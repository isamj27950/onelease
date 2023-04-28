import React from 'react'
import { Link } from 'react-router-dom'

export default function CardsHero({content,title,url_img,id}) {
  return (
    <div className='max-w-xs shadow-lg bg-slate-50'>
      <Link to={`/post/${id}`}> 
        <img src="img-on-lease/home/svgexport-5.svg" alt=''className='' />
        <h3 className='text-[#0000ee]'>{title}</h3>
        <p className='text-[#0000ee]'>{content}</p>
        </Link>
    </div>
  )
}
