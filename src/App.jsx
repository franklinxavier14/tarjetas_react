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
            nombre="Rocky"
            descripcion="¿Buscas un amigo valiente, lleno de energía y lealtad? ¡Conoce a Rocky, nuestro encantador Pinscher Miniatura, en busca de su hogar para siempre!"
            raza="Pinsher"
            badgeVariant="success"
            
          />
          <MyCard
            className="my-card"
            imagen="src\assets\img\pastoraleman.jpg"
            nombre="Zeus"
            descripcion="¿Estás listo para agregar a tu vida a un amigo leal? Conoce a Zeus, nuestro imponente Pastor Alemán, en búsqueda de un hogar lleno de amor."
            raza="Pastor Aleman"
            badgeVariant="primary"
          />
          <MyCard
            className="my-card"
            imagen="src\assets\img\golden.png"
            nombre="Luna"
            descripcion="¿Estás listo para una dosis extra de alegría y lealtad a tu vida? ¡Conoce a Luna, nuestra adorable Golden Retriever, en busca de su hogar para siempre!"
            raza="Golden Retriever"
            badgeVariant="danger"
          />
          <MyCard
            className="my-card"
            imagen="src\assets\img\schnauzer.png"
            nombre="Juanito"
            descripcion="¿Buscas un amigo leal, lleno de energía y cariño? ¡Conoce a nuestro encantador Schnauzer en busca de un hogar amoroso!"
            raza="Schnauzer"
            badgeVariant="warning"

            />
        </div>
      </main>
     
      <footer>
      <Footer textofooter="En algún lugar, hay un amigo peludo esperando transformar tu vida con amor incondicional. En nuestra búsqueda por encontrar hogares amorosos para perros necesitados, te presentamos a varios compañeros peludos listos para convertirse en parte inseparable de tu familia." />
      </footer>
    </>
  );
}

export default App;
