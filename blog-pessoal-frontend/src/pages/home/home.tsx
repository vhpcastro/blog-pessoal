import React from 'react'
import './home.css'

function home() {
    return (
        <>
            <div className="container">
                <div className="container-menu">
                    <div className="logo-menu">
                        <img className="img-menu" src="https://cdn.discordapp.com/attachments/710276943592816720/1012435229576810526/pilha-de-livros.png" alt="logo" />
                    </div>
                    <div className="list-menu">
                        <ul className="list">
                            <li>Home</li>
                            <li>Posts</li>
                            <li>Themes</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="content">

                </div>

                <div className="container-footer">
                    <footer className='footer'>
                        <h1></h1>
                        <img className='img-footer' src="https://cdn.discordapp.com/attachments/710276943592816720/1012442737829752992/linkedin.png" alt="linkedin-icon" />
                        <div className="middle-divisor">
                        <h1></h1>
                        </div>
                        <img className='img-footer' src="https://cdn.discordapp.com/attachments/710276943592816720/1012455440002584656/logotipo-do-google-plus-em-fundo-preto.png" alt="google-plus-icon" />
                        <div className="middle-divisor">
                        <h1></h1>
                        </div>
                        <img className='img-footer' src="https://cdn.discordapp.com/attachments/710276943592816720/1012442841101902035/placa-do-github.png" alt="github-icon" />
                        <h1></h1>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default home;