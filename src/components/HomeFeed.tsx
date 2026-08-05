import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

const HomeFeedDetails = styled.div`
    width: calc(100% - 35rem);
    margin-left: 16rem;
    margin-top: 1.5rem;
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

                    </>
                )
            }

            {
                selectedCard === 'Pessoal' && (
                    <>
                        <h3>Pessoal</h3>
                    </>
                )
            }

            {
                selectedCard === 'Profissional' && (
                    <>
                        <h3>Profissional</h3>
                    </>
                )
            }

        </HomeFeedDetails>
    )
}

export default HomeFeed