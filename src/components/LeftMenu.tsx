import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @keyframes blog-status-blink {
        0%, 100% {
            opacity: 1;
            background: hsl(0 100% 70%);
        }
        50% {
            opacity: 0.3;
            background: hsl(0 100% 50%);
        }
    }
`;

const LeftMenuDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: sticky;
    top: 40px;
    left: 18rem;
    align-self: flex-start;
    z-index: 1000;

    .square {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        font-family: "Trebuchet MS", sans-serif;
        width: 14.5rem;
        padding: 0.5rem;
        border: 1px solid hsl(0, 100%, 8%);
        background: linear-gradient(0deg, hsl(0, 100%, 8%) 0%, hsl(0, 100%, 2%) 100%);

        .title {
            border-bottom: 1px solid hsl(0, 100%, 15%);
            padding-bottom: 0.5rem;
        }

        h4 {
            width: 100%;
            margin-top: 0.5rem;
        }

        img {
            width: 100%;
            height: 21rem;
            object-fit: cover;
        }

        a {
            margin-top: -1rem;
            color: hsl(0, 100%, 25%);
            text-decoration: underline;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                padding: 1rem 0;
                display: flex;
                align-items: center;

                span {
                    font-size: 0.6rem;
                }

                a {
                    color: hsl(0, 100%, 25%);
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                        color: hsl(0, 100%, 35%);
                    }
                }
            }
        }

        .status {
            margin: 1rem 0;
            background: hsl(0, 100%, 25%);
            width: 90%;
            padding: 0.2rem 0.7rem;
            font-size: 0.9rem;
            display: flex;
            text-align: center;
            align-items: center;
            gap: 0.4rem;
            border-left: 2px solid hsl(0, 100%, 40%);

            span {
                background: hsl(0, 100%, 25%);
                border-radius: 50%;
                width: 6px;
                height: 6px;
                animation: 1.6s ease-in-out infinite blog-status-blink;
                display: block;
            }
        }
    }

    @media (max-width: 1600px) {
        left: 10rem;

        .square {
            width: 13.5rem;

            img {
                height: 19rem;
            }
        }
    }

    @media (max-width: 1366px) {
        left: 6rem;

        .square {
            width: 12.5rem;

            img {
                height: 17rem;
            }

            h4 {
                font-size: 0.95rem;
            }

            .status {
                width: 100%;
                font-size: 0.8rem;
            }
        }
    }

    @media (max-width: 1200px) {
        left: 2rem;

        .square {
            width: 11.5rem;
            padding: 0.75rem;

            img {
                height: 15rem;
            }

            ul {
                li {
                    padding: 0.8rem 0;

                    span {
                        font-size: 0.55rem;
                    }

                    a {
                        font-size: 0.85rem;
                    }
                }
            }
        }
    }

    @media (max-width: 992px) {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        align-self: center;
        margin-bottom: 2rem;

        .square {
            width: 100%;
            max-width: 500px;
            margin: 1rem auto 0;

            img {
                height: 20rem;
            }
        }
    }

    @media (max-width: 768px) {
        .square {
            max-width: 100%;

            img {
                height: 18rem;
            }

            .status {
                width: 100%;
                font-size: 0.8rem;
            }
        }
    }

    @media (max-width: 576px) {
        .square {
            padding: 0.75rem;

            img {
                height: 16rem;
            }

            h4 {
                font-size: 0.9rem;
            }

            ul {
                li {
                    flex-wrap: wrap;
                    gap: 0.25rem;

                    a {
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }

    @media (max-width: 428px) {
        .square {
            padding: 0.6rem;

            img {
                height: 14rem;
            }

            .status {
                padding: 0.5rem;
                font-size: 0.75rem;
            }

            h4 {
                font-size: 0.85rem;
            }

            a {
                font-size: 0.8rem;
            }
        }
    }
`;

const LeftMenu = () => {
    return (
        <>
            <GlobalStyles />
            <LeftMenuDetails>
                <div className="square">
                    <img src="https://github.com/yagasaki7k.png" alt="Anderson Marlon" />

                    <h4>Anderson Marlon</h4>
                    <Link href="">@yagasaki7k</Link>

                    <div className="status">
                        <span></span> online
                    </div>
                </div>

                <div className="square">
                    <h4 className="title">Minhas Páginas</h4>
                    <ul>
                        <li><Link href="/"><span>⮞</span> Perfil</Link></li>
                        <li><Link href="/posts"><span>⮞</span> Posts</Link></li>
                        <li><Link href="/reviews"><span>⮞</span> Reviews</Link></li>
                        {/* <li><Link href="/fotos"><span>⮞</span> Fotos</Link></li> */}
                    </ul>
                </div>
                <div className="square">
                    <h4 className="title">Meus Links</h4>
                    <ul>
                        <li><Link href="https://twitter.com/yagasaki7k"><span>⮞</span> Twitter/X</Link></li>
                        <li><Link href="https://github.com/yagasaki7k"><span>⮞</span> GitHub</Link></li>
                        <li><Link href="https://yagasaki.vercel.app"><span>⮞</span> Professional</Link></li>
                    </ul>
                </div>
            </LeftMenuDetails>
        </>
    )
}

export default LeftMenu