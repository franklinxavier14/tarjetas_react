import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MyCard from './components/MyCard';
import './App.css';

function App() {
  return (
    <>
      <Header title="Adopta un Perrito" />
      <main className='coleccion'>
        <div className="coleccion">
          <MyCard
            className="my-card"
            imagen="src\assets\img\pinsher.jpg"
            nombre="Tita"
            descripcion="Perrita Pinsher muy cariñosa y juguetona, se porta excelente y muy inteligente"
            raza="Pinsher"
            badgeVariant="success"
            
          />
          <MyCard
            className="my-card"
            imagen="src\assets\img\pinsher.jpg"
            nombre="Tita"
            descripcion="gutyutyutyutyutyu"
            raza="tyutyutyutyuty"
            badgeVariant="primary"
          />
          <MyCard
            className="my-card"
            imagen="src\assets\img\pinsher.jpg"
            nombre="Tita"
            descripcion="Perrita Pinsher muy cariñosa y juguetona, se porta excelente y muy inteligente"
            raza="Pinsher"
            badgeVariant="danger"
          />
          <MyCard
            className="my-card"
            imagen="src\assets\img\pinsher.jpg"
            nombre="Tita"
            descripcion="Perrita Pinsher muy cariñosa y juguetona, se porta excelente y muy inteligente"
            raza="Pinsher"
            badgeVariant="warning"

            />
        </div>
      </main>
     
      <footer>
      <Footer textofooter="kilsdjljhdsgjkhdfkjghdfjghdfjhgkdjfhgjdkfghdfjkhgdfkg" />
      </footer>
    </>
  );
}

export default App;
