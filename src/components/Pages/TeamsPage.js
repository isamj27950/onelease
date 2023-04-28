/* eslint-disable no-undef */
import React from 'react'
import Navigation from '../navbar/Navigation';
import FooterPart from '../footer/FooterPart';
import CardsTeam from '../cards/CardsTeam';
import { dataTeam } from '../data/dataTeam';

export default function TeamsPage(id,url_img, title,subtitle, desc, content) {
  return (
    <div>
        <Navigation/>
        <div className='text-center py-4'> 
          <h1 className='font-semibold text-[#57007f] uppercase text-2xl '
          >Découvrez la one team</h1>
            <hr className='mx-96  bg-[#57007f]'></hr>
            <h3 className='italic font-normal text-lg pt-2'>de A à T</h3>
        </div>
        <div className="flex justify-center flex-wrap gap-6 mx-40 px-20  ">
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
       
        <FooterPart />
    </div>
       
  
  )
}
