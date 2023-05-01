import React from 'react'
import Navigation from '../navbar/Navigation'
import FooterPart from '../footer/FooterPart'
import Form from "../form/Form";



export default function LldPage() {
  return (

    <div>
        <Navigation/>
      <section >
        <h2>Tout savoir sur</h2>
        <button>LA LOCATION LONGUE DUREE</button>
      </section >
      <section>
        <h2>Qu'est ce que c'est?</h2>
        <p></p>
        <img></img>
        <hr></hr>
        <h2>Comment Ca Fonctionne?</h2>
        <p></p>
        <img src="" alt="" />
        <p></p>
        <img src="" alt="" />
        <hr />
      </section>
      <section>
        <h2>POURQUOI OPTER POUR CETTE SOLUTION?</h2>
        <p></p>
        <hr />
        <p>#1</p>
        <p>#2</p>
        <img src="" alt="" />
        <hr />
        <p>#3</p>
        <img src="" alt="" />
        <p>#4</p>
        <p>#5</p>
        <img src="" alt="" />
        <p>#6</p>
        <p>#7</p>
        <img src="" alt="" />
      </section>
      <section>
        <hr />
        <h2>POUR FINIR...</h2>
        <p></p>
        <hr />
      </section>
      <section>
        <hr />
       <Form />
      
      </section>

        <FooterPart/>
      </div>
  )
}
