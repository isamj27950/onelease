import React from "react";
import Form from "../form/Form";
import Layouts from "../layout/Layout";

export default function LldPage() {
  return (
    <Layouts> 
      <div>
        <section
          id="bgblue"
          className="bg-gradient-to-l from-purple-950 via-purple-900 to-purple-950 text-center">
          <h2 className="uppercase text-2xl text-white py-5">
            Tout savoir <span className="text-[#57007f]">sur</span>
          </h2>
          <div className="py-4 text-3xl font-normal text-[#57007f]   ">
            <button className="bg-white rounded-full h-12 px-10 ">
              LA LOCATION LONGUE DURÉE
            </button>
          </div>
          <div className="pb-10  ">
            <hr className="w-24 m-auto h-1 bg-white "></hr>
          </div>
        </section>
        <section id="cardlld">
          <h2>Qu'est ce que c'est?</h2>
          <p></p>
          <img src="/img-on-lease/lld/photo_1lld.jpg" alt="photo d'une route" />
          <hr></hr>
          <h2>Comment Ca Fonctionne?</h2>
          <p></p>
          <img src="/img-on-lease/lld/photo_2LLD.jpg" alt="" />
          <p></p>
          <img src="/img-on-lease/lld/photo_3lld.jpg" alt="" />
          <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
        </section>
        <section id="solution">
          <h2>POURQUOI OPTER POUR CETTE SOLUTION?</h2>
          <p>Tout simplement parceque la location longue durée vous offre en tant que professionnel de nombreux avantage:</p>
          <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
          <p>#1</p>
          <p>#2</p>
          <img src="/img-on-lease/lld/photo_4lld.jpg" alt="" />
          <hr />
          <p>#3</p>
          <img src="/img-on-lease/lld/photo_5lld.jpg" alt="" />
          <p>#4</p>
          <p>#5</p>
          <img src="" alt="" />
          <p>#6</p>
          <p>#7</p>
          <img src="" alt="" />
        </section>
        <section id="end">
          <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
          <h2 className="text-center uppercase py-3">POUR  <span className="text-sky-200">FINIR...</span></h2>
          <p> Vous l'aurez compris, la location longue durée présente bien des avantages: de la satisfastion de vos conducteurss jusqu'à votrte trésorerie en passant par l'image de votre entreprise.</p>
          <p>Pour vous accompagner dans cette solution, faites le choix du bon partenaire qui saura ête à votre écoute et vous guider dans la gestion de  votre parc autombile. </p>
          <h3>One Lease#CLIENTFIRST!</h3>
          <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
        </section>
        <section>
          <hr />
          <Form />
        </section>
      </div>
    </Layouts>
  );
}
