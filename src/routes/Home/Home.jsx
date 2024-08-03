import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className="home">
            <header className="navbar">
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main>
                <section className="hero">
                    <div>
                    <h2>IPHONE 16 BARATO?</h2>
                    <p>Só aqui na Revendeoficial</p>
                    </div>
                    <div className="hero-image">
                        <img src="src\assets\1-mac.jpg" alt="Promo Image" />
                    </div>
                </section>

                <section className="mais-vendidos">
                    <h2>Mais Vendidos</h2>
                    <div className="card-container">
                        {[...Array(3)].map((_, index) => (
                            <div className="card" key={index}>
                                <img src="src\assets\1-watch.png" alt="Card Image" />
                                <div className="card-content">
                                    <h3>Card title</h3>
                                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="categorias">
                    <h2>Categorias</h2>
                    <div className="card-container">
                        {[...Array(3)].map((_, index) => (
                            <div className="card" key={index}>
                                <img src="/path/to/your/image.jpg" alt="Card Image" />
                                <div className="card-content">
                                    <h3>Card title</h3>
                                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p>Last updated 3 mins ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Home;
