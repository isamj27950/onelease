import React from 'react'
import Navigation from '../navbar/Navigation'
import FooterPart from '../footer/FooterPart'
import "./HomePage.css"
import CardsHero from '../cards/CardsHero'
import { dataHero } from '../data/dataHero'
import SectionForm from '../../parts/SectionForm'
import TeamHome from '../../parts/TeamHome'
import CardBack from '../cards/CardBack'
import Button from '../button/Button'

function HomePage() {
  return (
    <div>
      <Navigation />
      <main className=''>
        <section id="hero" class="flexcenter">
          <div className="hight_hero">
            <div id="text" class="flex-box">
              <h2>Entrez dans une nouvelle relation avec votre loueur LLD!</h2>
              <hr className="w-44 ml-6 h-1 bg-white"></hr>
              <p>
                ONE LEASE se met à votre service , vous répond vous conselille
                et surtoutvous accompagne.
              </p>
              <p>
                Vivez l'expérience Client First, que vpus soyez gestionnaire de
                flotte ou conducteur!
              </p>
              <div className='btn'> 
                <Button
                title="Contactez-Nous"
                /> 
              </div>  
            </div>
            <div class="phone">
              <img
                src="/img-one-lease/home/telephone.png"
                alt=""
                className="h-6 m-1"
              />
              <h2 className="text-white"> 01.85.74.78.00</h2>
            </div>
          </div>
          <div className="flex">
            {dataHero.map((item, index) => (
              <CardsHero
                key={index}
                img
                src={item.url_img}
                alt=""
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </section>
        <section id="services">
          <div className="bg-black text-white font-semibold text-size text-4xl text-center py-10 ">
            <h2>Bienvenue dans la leasetech</h2>
          </div>
        </section>
        <section id="numbers"></section>

        <section id="team">
          <TeamHome />
        </section>

        <section id="form">
          <SectionForm />
        </section>
        <section id="icons"></section>
        <CardBack />
      </main>
      <FooterPart />
    </div>
  );
}
export default HomePage
