/* eslint-disable no-undef */
import React from 'react'
import Navigation from '../navbar/Navigation';
import FooterPart from '../footer/FooterPart';
import CardsTeam from '../cards/CardsTeam';
import { dataTeam } from '../data/dataTeam';
import CardBack from '../cards/CardBack';

export default function TeamsPage(id,url_img, title,subtitle, desc, content) {
  return (
    <div>
        <Navigation/>
        <div className='text-center py-4'> 
          <h1 className='font-semibold text-[#57007f] uppercase text-2xl '
          >Découvrez la one team</h1>
            <hr className='w-44 m-auto h-1  bg-[#57007f]'></hr>
            <h3 className='italic font-normal text-lg pt-2'>de <span className='font-bold text-[#57007f]'>A à T</span></h3>
        </div>
        <div className="flex justify-center flex-wrap gap-6 mx-30 px-20  ">
          {dataTeam.map((item,index)=>(
            <CardsTeam 
            key={index.id}
            url_img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            desctitle={item.desctitle}
            desc={item.desc}
            contenttitle={item.contenttitle}
            content={item.content}
            />
          )
          )}</div>
          <CardBack/>
        <FooterPart />
    </div>
       
  
  )
}
