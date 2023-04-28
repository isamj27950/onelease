import React from 'react'
import Navigation from '../navbar/Navigation'
import FooterPart from '../footer/FooterPart'
import "./HomePage.css"
import CardsHero from '../cards/CardsHero'
import { dataHero } from '../data/dataHero'

function HomePage() {
  return (
    <div>
        <Navigation/>
        <main> 
          <section id="hero" class="flexcenter" >
            <div id="text" class="flex-box">
              <h2>
                Entrez dans une nouvelle relation avec votre loueur LLD!
              </h2>
              <p>ONE LEASE se met à votre service , vous répond vous conselille et surtoutvous accompagne.</p>
              <p>Vivez l'expérience Client First, que vpus soyez gestionnaire de flotte ou conducteur!</p>
              <a href="/">Contactez-nous</a>
            </div>
            <div class="card"> 
                  { 
                  dataHero.map((item,index) => (
                  <CardsHero
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  />
                  )
                  )}
            </div>
          </section>
          <section id="services" >
            <div className='bg-black text-white font-bold text-center py-10 '>
              <h2>Bienvenue dans la leasetech</h2>
            </div>
        
          </section>
          <section id="numbers" >
            
          </section >
          <section id="team" >
              
          </section >
          <section id="form" >
              
          </section>
          <section id="icons" >
            
          </section>
        </main>
        <FooterPart/>
   </div> 
  )
}
export default HomePage
