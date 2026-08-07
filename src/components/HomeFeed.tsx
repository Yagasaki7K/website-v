import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

const HomeFeedDetails = styled.div`
    width: calc(100% - 35rem);
    margin: 1.5rem 1rem 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0 30px 0 0;
    border: 1px solid hsl(0 100% 8%);
    background: linear-gradient(0deg, hsl(0 100% 8%) 0%, hsl(0 100% 2%) 100%);

    h2 {
        font-family: 'Source Serif 4', serif;
    }

    h3 {
        font-family: "Tahoma", sans-serif;
        font-size: 0.9rem;
        margin-top: 1rem;
        font-weight: 300;
    }

    .title {
        border-bottom: 1px solid hsl(0 100% 15%);
        padding-bottom: 1rem;
    }

    .cards-info {
        display: flex;
        font-family: "Trebuchet MS", sans-serif;
        font-size: 0.8rem;
        margin-bottom: 1rem;

        .card {
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
            color: hsl(0 100% 25%);
            width: 100%;
            cursor: pointer;

            h4 {
                font-size: 0.7rem;
                margin: 0;
            }

            p {
                margin-top: 0.5rem;
                margin-bottom: 0;
            }

            &:hover {
                background: hsl(0 100% 15%);
                color: hsl(0 100% 50%);
            }
        }
    }

    .cards-menu {
        display: flex;
        font-family: "Trebuchet MS", sans-serif;
        font-size: 0.8rem;
        border-bottom: 1px solid hsl(0 100% 15%);

        .card {
            border: 1px solid hsl(0 100% 15%);
            padding: 0.25rem 0.5rem;
            color: hsl(0 100% 25%);
            cursor: pointer;
        }

        .selected {
            background: hsl(0 100% 15%);
            color: hsl(0 100% 100%);
        }
    }

    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid hsl(0 100% 15%);

        a {
            font-size: 0.8rem;
            font-family: "Tahoma", sans-serif;
            text-decoration: underline;
            color: hsl(0 100% 25%);

            &:hover {
                text-decoration: underline;
                color: hsl(0 100% 35%);
            }
        }
    }

    .posts {
        padding: 0.02rem 1rem;
        margin: 0;
        display: flex;
        align-items: center;
        border: 1px solid hsl(0 100% 15%);

        &:hover {
            border: 1px solid hsl(0 100% 25%);
        }

        .leftPost {
            width: 15rem;

            p {
                font-family: "Tahoma", sans-serif;
                font-size: 0.7rem;
                margin: 0;
            }

            b {
                font-family: "Tahoma", sans-serif;
                font-size: 0.8rem;
                letter-spacing: 0.05rem;
                text-transform: uppercase;
                color: hsl(0 100% 30%);
            }
        }

        .rightPost {
            width: 35rem;
            padding: 1rem 0;
            
            h4 {
                font-family: "Source Serif 4", serif;
                font-size: 0.9rem;
                margin: 0;

                &:hover {
                    text-decoration: underline;
                }
            }

            p {
                font-family: "Tahoma", sans-serif;
                font-size: 0.75rem;
                margin-top: 0.5rem;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    
    .postSelected {
        background: hsl(0 100% 10%);
    }

    .personal {
        margin: 0;
        display: flex;
        flex-direction: column;
        border: 1px solid hsl(0 100% 15%);

        .info {
            display: flex;
            border: 1px solid hsl(0 100% 15%);
            gap: 1rem;
            padding: 0rem 1rem;

            .title-info {
                text-align: right;
                width: 10rem;
                font-size: 0.8rem;
                color: hsl(0 100% 30%);
                font-family: "Tahoma", sans-serif;
            }

            .text-info {
                text-align: left;
                font-size: 0.8rem;
                width: 100%;
                color: hsl(0 100% 100%);
                font-family: "Tahoma", sans-serif;
            }
        }

        .infoSelected {
            background: hsl(0 100% 9%);
        }
    }
    
    .jobs {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        border: 1px solid hsl(0 100% 15%);

        .job {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid hsl(0 100% 15%);
            gap: 1rem;
            padding: 0rem 1rem;

            .title-job {
                width: 15rem;
                color: hsl(0 100% 30%);
                font-family: "Tahoma", sans-serif;

                h4 {
                    color: hsl(0 100% 100%);
                    font-size: 0.9rem;
                    margin: 10px 0 0 0;
                }

                .role-job {
                    margin-top: 0.5rem;
                    font-size: 0.7rem;
                }
            }

            .text-job {
                font-size: 0.8rem;
                color: hsl(0 100% 30%);
                font-family: "Tahoma", sans-serif;
            }
        }

        .jobSelected {
            background: hsl(0 100% 9%);
        }
    }

    .link {
        font-family: "Tahoma", sans-serif;
        font-size: 0.8rem;
        margin: 1rem 0 0.5rem 0.2rem;

        a {
            text-decoration: underline;
            color: hsl(0 100% 25%);
        }
    }

    .testimonials {
        margin-top: 1rem;

        .head {
            margin-bottom: 1rem;
        }

        .message {
            display: flex;
            margin-bottom: 1rem;

            .image {
                display: flex;

                img {
                    width: 50px;
                    height: 50px;
                    padding: 0.5rem;
                    border: 1px solid hsl(0 100% 15%);
                    background: hsl(0 100% 8%)
                }
            }

            .headMessage {
                padding: 0 0.5rem;

                .header {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-between;
                    margin-top: -0.5rem;
                    
                    b {
                        font-family: "Tahoma", sans-serif;
                        font-size: 0.8rem;
                        color: hsl(0 100% 100%);
                    }

                    p {
                        font-family: "Tahoma", sans-serif;
                        font-size: 0.7rem;
                        color: hsl(0 100% 30%);
                    }
                }

                .me {
                    width: 100%;
                    margin-top: -1rem;
                    font-family: "Tahoma", sans-serif;
                    font-size: 0.8rem;
                }
            }
        }

        hr {
            margin-top: 1rem;
            border: 1px solid hsl(0 100% 15%);
        }

        .ourTestimonials {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            h3 {
                margin-bottom: 0rem;
            }

            label {
                font-family: "Tahoma", sans-serif;
                font-size: 0.8rem;
            }

            input, textarea {
                font-family: "Tahoma", sans-serif;
                font-size: 0.8rem;
                outline: none;
                border: 1px solid hsl(0 100% 15%);
                background: hsl(0 100% 10%);
                color: hsl(0 100% 100%);
                padding: 0.75rem;
            }

            textarea {
                height: 5rem;
            }

            button {
                width: 10rem;
                background: hsl(0 100% 15%);
                color: #fff;
                border: none;
                padding: 0.5rem 0;
                font-size: 0.8rem;
                font-family: "Tahoma", sans-serif;
                cursor: pointer;
                margin-bottom: 0.5rem;

                &:hover {
                    color: hsl(0 100% 75%);
                    background: hsl(0 100% 10%);
                }
            }
        }
    }

    @media (max-width: 1600px) {
    .homeFeedDetails,
        & {
            width: calc(100% - 30rem);
            margin-left: 14rem;
        }

        .posts {
            .leftPost {
                width: 13rem;
            }

            .rightPost {
                width: 100%;
            }
        }
    }

    @media (max-width: 1366px) {
        .homeFeedDetails,
        & {
            width: calc(100% - 26rem);
            margin-left: 12rem;
        }

        .cards-info {
            flex-wrap: wrap;

            .card {
                min-width: calc(50% - .5rem);
            }
        }

        .posts {
            .leftPost {
                width: 11rem;
            }
        }

        .personal {
            .info {
                .title-info {
                    width: 8rem;
                }
            }
        }

        .jobs {
            .job {
                .title-job {
                    width: 12rem;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .homeFeedDetails,
        & {
            width: calc(100% - 4rem);
            margin: 1.5rem auto 0;
        }

        .cards-info {
            .card {
                min-width: 100%;
            }
        }

        .posts {
            flex-direction: column;
            align-items: flex-start;

            .leftPost,
            .rightPost {
                width: 100%;
            }
        }

        .personal {
            .info {
                flex-direction: column;
                gap: .5rem;
                padding: 1rem;

                .title-info,
                .text-info {
                    width: 100%;
                    text-align: left;
                }
            }
        }

        .jobs {
            .job {
                flex-direction: column;
                align-items: flex-start;
                padding: 1rem;

                .title-job,
                .text-job {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 992px) {
        .homeFeedDetails,
        & {
            width: calc(100% - 3rem);
            margin: 1rem auto 0;
            padding: 1rem;
        }

        .head {
            flex-direction: column;
            align-items: flex-start;
            gap: .75rem;
        }

        .cards-menu {
            overflow-x: auto;
            white-space: nowrap;

            .card {
                flex-shrink: 0;
            }
        }

        .testimonials {
            .message {
                flex-direction: column;

                .headMessage {
                    padding: .5rem 0;

                    .header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: .25rem;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .homeFeedDetails,
        & {
            width: calc(100% - 2rem);
            padding: .75rem;
        }

        h2 {
            font-size: 1.4rem;
        }

        h3 {
            font-size: .8rem;
        }

        .posts {
            .rightPost {
                h4 {
                    font-size: .85rem;
                }

                p {
                    font-size: .7rem;
                }
            }
        }

        .testimonials {
            .ourTestimonials {
                button {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 576px) {
        .homeFeedDetails,
        & {
            width: calc(100% - 1rem);
            padding: .75rem .5rem;
        }

        .cards-menu {
            .card {
                font-size: .7rem;
            }
        }

        .posts {
            padding: .75rem;

            .leftPost {
                b {
                    font-size: .75rem;
                }

                p {
                    font-size: .65rem;
                }
            }

            .rightPost {
                h4 {
                    font-size: .8rem;
                }

                p {
                    font-size: .68rem;
                }
            }
        }

        .jobs {
            .job {
                .title-job {
                    h4 {
                        font-size: .8rem;
                    }

                    .role-job {
                        font-size: .65rem;
                    }
                }

                .text-job {
                    font-size: .7rem;
                }
            }
        }
    }

    @media (max-width: 428px) {
        .homeFeedDetails,
        & {
            width: 100%;
            margin-top: .5rem;
            padding: .5rem;
            border-radius: 0;
        }

        .head {
            a {
                font-size: .7rem;
            }
        }

        .cards-info {
            font-size: .7rem;
        }

        .personal {
            .info {
                .title-info,
                .text-info {
                    font-size: .7rem;
                }
            }
        }

        .testimonials {
            .message {
                .image {
                    img {
                        width: 40px;
                        height: 40px;
                    }
                }

                .headMessage {
                    .header {
                        b {
                            font-size: .75rem;
                        }

                        p {
                            font-size: .65rem;
                        }
                    }

                    .me {
                        font-size: .7rem;
                    }
                }
            }

            .ourTestimonials {
                input,
                textarea {
                    font-size: .75rem;
                }

                button {
                    font-size: .75rem;
                }
            }
        }
    }
`

const HomeFeed = () => {
    const [selectedCard, setSelectedCard] = useState('Posts')

    return (
        <HomeFeedDetails>
            <h2 className="title">Anderson "Yagasaki" Marlon</h2>

            <div className="cards-info">
                <div className="card">
                    <h4>Visitas</h4>
                    <p>0</p>
                </div>
                <div className="card">
                    <h4>Fotos</h4>
                    <p>0</p>
                </div>
                <div className="card">
                    <h4>Vídeos</h4>
                    <p>0</p>
                </div>
                <div className="card">
                    <h4>Fãs</h4>
                    <p>0</p>
                </div>
            </div>

            <div className="cards-menu">
                <div className={`card ${selectedCard === 'Posts' ? 'selected' : ''}`} onClick={() => setSelectedCard('Posts')}>Posts</div>
                <div className={`card ${selectedCard === 'Pessoal' ? 'selected' : ''}`} onClick={() => setSelectedCard('Pessoal')}>Pessoal</div>
                <div className={`card ${selectedCard === 'Profissional' ? 'selected' : ''}`} onClick={() => setSelectedCard('Profissional')}>Profissional</div>
            </div>

            {
                selectedCard === 'Posts' && (
                    <>
                        <div className="head">
                            <h3>Posts recentes</h3>
                            <Link href="/posts">ver todos</Link>
                        </div>

                        <div className="posts">
                            <div className="leftPost">
                                <p>4 de agosto de 2026</p>
                                <b>journal</b>
                            </div>
                            <div className="rightPost">
                                <h4>Confusão é o que eu tenho a oferecer</h4>
                                <p>Sobre orgulho, relações inacabadas e as vidas estranhas que construímos ao redor das palavras que nunca enviamos.</p>
                            </div>
                        </div>

                        <div className="posts postSelected">
                            <div className="leftPost">
                                <p>4 de agosto de 2026</p>
                                <b>journal</b>
                            </div>
                            <div className="rightPost">
                                <h4>print("Olá, mundo!");</h4>
                                <p>Sobre orgulho, relações inacabadas e as vidas estranhas que construímos ao redor das palavras que nunca enviamos.</p>
                            </div>
                        </div>

                        <div className="posts">
                            <div className="leftPost">
                                <p>4 de agosto de 2026</p>
                                <b>journal</b>
                            </div>
                            <div className="rightPost">
                                <h4>Confusão é o que eu tenho a oferecer</h4>
                                <p>Sobre orgulho, relações inacabadas e as vidas estranhas que construímos ao redor das palavras que nunca enviamos.</p>
                            </div>
                        </div>
                    </>
                )
            }

            {
                selectedCard === 'Pessoal' && (
                    <>
                        <div className="personal">
                            <div className="info">
                                <p className="title-info">Aniversário</p>
                                <p className="text-info">25 de maio de 1997</p>
                            </div>
                            <div className="info infoSelected">
                                <p className="title-info">Linguas que eu falo</p>
                                <p className="text-info">Português (Nativo), Inglês (Intermediário), Espanhol (Básico), Japonês (Estudando)</p>
                            </div>
                            <div className="info">
                                <p className="title-info">Cidade natal</p>
                                <p className="text-info">Campinas, São Paulo, Brasil</p>
                            </div>
                            <div className="info infoSelected">
                                <p className="title-info">Moro atualmente</p>
                                <p className="text-info">Campinas, São Paulo, Brasil</p>
                            </div>
                            <div className="info">
                                <p className="title-info">Paixão</p>
                                <p className="text-info">Tecnologia, cyberpunk, inteligência artificial, games, música, livros, cinema, cultura underground, criação de comunidades, cultura japonesa, drifting e ensino.</p>
                            </div>
                            <div className="info infoSelected">
                                <p className="title-info">Esporte e Times</p>
                                <p className="text-info">Seattle Seahawks</p>
                            </div>
                            <div className="info">
                                <p className="title-info">Atividades</p>
                                <p className="text-info">Taekwondo (Faixa Preta), pintura, jogos, escrita, design e desenvolvimento de projetos.</p>
                            </div>
                        </div>
                    </>
                )
            }

            {
                selectedCard === 'Profissional' && (
                    <>
                        <div className="jobs">
                            <div className="job">
                                <div className="title-job">
                                    <h4>Engide</h4>
                                    <p className="role-job">Fundador, CTO & Engenheiro de Software</p>
                                </div>
                                <p className="text-job">2025-2026</p>
                            </div>
                            <div className="job jobSelected">
                                <div className="title-job">
                                    <h4>MeuBoi</h4>
                                    <p className="role-job">Engenheiro de Software Pleno</p>
                                </div>
                                <p className="text-job">2025-2026</p>
                            </div>
                            <div className="job">
                                <div className="title-job">
                                    <h4>Astriia</h4>
                                    <p className="role-job">Engenheiro de Software Pleno</p>
                                </div>
                                <p className="text-job">2024-2025</p>
                            </div>
                            <div className="job jobSelected">
                                <div className="title-job">
                                    <h4>WhatsUpper</h4>
                                    <p className="role-job">Engenheiro de Software Pleno</p>
                                </div>
                                <p className="text-job">2023</p>
                            </div>
                            <div className="job">
                                <div className="title-job">
                                    <h4>Stone</h4>
                                    <p className="role-job">Engenheiro de Software Pleno</p>
                                </div>
                                <p className="text-job">2022-2023</p>
                            </div>
                            <div className="job jobSelected">
                                <div className="title-job">
                                    <h4>Cenário Capital</h4>
                                    <p className="role-job">Analista de Sistemas Pleno</p>
                                </div>
                                <p className="text-job">2021</p>
                            </div>
                        </div>
                        <div className="link">
                            <Link href="https://www.linkedin.com/in/andersonmarlon" target="_blank" rel="noopener noreferrer">
                                Ver perfil completo no LinkedIn ↗
                            </Link>
                        </div>
                    </>
                )
            }

            <div className="testimonials">
                <div className="head">
                    <h3>Meus Depoimentos</h3>
                    <Link href="/depoimentos">ver todos</Link>
                </div>

                <div className="message">
                    <div className="image">
                        <img src="/msn-comment.png" alt="" />
                    </div>

                    <div className="headMessage">
                        <div className="header">
                            <b>John Doe</b>
                            <p>5 de agosto de 2026</p>
                        </div>

                        <div className="me">
                            <p>Anderson é um profissional excepcional, sempre disposto a ajudar e compartilhar seu conhecimento. Sua dedicação e paixão pelo que faz são inspiradoras.</p>
                        </div>
                    </div>
                </div>
                <div className="message">
                    <div className="image">
                        <img src="/msn-comment.png" alt="" />
                    </div>

                    <div className="headMessage">
                        <div className="header">
                            <b>John Doe</b>
                            <p>5 de agosto de 2026</p>
                        </div>

                        <div className="me">
                            <p>Anderson é um profissional excepcional, sempre disposto a ajudar e compartilhar seu conhecimento. Sua dedicação e paixão pelo que faz são inspiradoras.</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="ourTestimonials">
                    <h3>Deixe um depoimento</h3>

                    <label htmlFor="testimonial">Nome (opcional)</label>
                    <input type="text" id="testimonial" name="testimonial" placeholder="Digite seu nome" />

                    <label htmlFor="testimonial">Mensagem</label>
                    <textarea id="testimonial" name="testimonial" placeholder="Digite seu depoimento"></textarea>

                    <button type="submit">enviar depoimento</button>
                </div>
            </div>

        </HomeFeedDetails>
    )
}

export default HomeFeed