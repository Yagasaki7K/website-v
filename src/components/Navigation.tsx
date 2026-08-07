import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from "next/router";

const NavigationDetails = styled.div`
    display: flex;
    position: fixed;
    width: 95vw;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 0rem 4rem;
    height: 38px;
    border: 1px solid hsl(0 100% 8%);
    font-family: 'Source Serif 4', serif;
    background: linear-gradient(0deg, hsl(0 100% 8%) 0%, hsl(0 100% 2%) 100%);

    .leftContent {
        display: flex;
        align-items: center;

        ul {
            display: flex;
            list-style: none;

            li {
                display: flex;
                text-align: center;
                align-items: center;
                padding: 0.75rem 1.2rem;

                a {
                    text-decoration: none;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                }
            }

            .non-selected {
                a {
                    color: #957373;
                }

                &:hover {
                    background: linear-gradient(0deg, hsl(0 100% 2%) 0%, hsl(0 100% 8%) 100%);
                }
            }

            .selected {
                background: #2b1717;
                padding: 0.5rem 1.2rem;

                a {
                    color: #fff;
                }
            }
        }

        img {
            width: 50px;
            margin-top: 0.5rem;
        }
    }

    .rightContent {
        img {
            width: 28px;
            content: url('/samurai-white.png');

            &:hover {
                content: url('/samurai-colorful.png');
            }
        }
    }

    @media (max-width: 1600px) {
        width: calc(100vw - 2rem);
        padding: 0 3rem;

        .leftContent {
            ul {
                li {
                    padding: 0.75rem 1rem;

                    a {
                        font-size: 0.75rem;
                    }
                }
            }
        }
    }

    @media (max-width: 1366px) {
        padding: 0 2rem;

        .leftContent {
            gap: 1rem;

            img {
                width: 42px;
            }

            ul {
                li {
                    padding: 0.75rem 0.8rem;

                    a {
                        font-size: 0.72rem;
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        padding: 0 1.5rem;

        .leftContent {
            img {
                width: 40px;
            }

            ul {
                li {
                    padding: 0.75rem 0.65rem;
                }
            }
        }
    }

    @media (max-width: 992px) {
        width: 100%;
        padding: 0 1rem;

        .leftContent {
            flex: 1;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            ul {
                flex-wrap: nowrap;
                width: max-content;

                li {
                    flex-shrink: 0;
                    padding: 0.75rem 0.7rem;
                }
            }

            img {
                width: 38px;
                flex-shrink: 0;
            }
        }

        .rightContent {
            margin-left: 1rem;
            flex-shrink: 0;

            img {
                width: 24px;
            }
        }
    }

    @media (max-width: 768px) {
        height: 36px;
        padding: 0 0.75rem;

        .leftContent {
            img {
                width: 34px;
            }

            ul {
                li {
                    padding: 0.65rem 0.6rem;

                    a {
                        font-size: 0.68rem;
                    }
                }
            }
        }

        .rightContent {
            img {
                width: 22px;
            }
        }
    }

    @media (max-width: 576px) {
        padding: 0 0.5rem;

        .leftContent {
            img {
                width: 30px;
            }

            ul {
                li {
                    padding: 0.65rem 0.5rem;

                    a {
                        font-size: 0.65rem;
                    }
                }
            }
        }

        .rightContent {
            img {
                width: 20px;
            }
        }
    }

    @media (max-width: 428px) {
        padding: 0 0.4rem;

        .leftContent {
            img {
                width: 28px;
            }

            ul {
                li {
                    padding: 0.6rem 0.45rem;

                    a {
                        font-size: 0.62rem;
                    }
                }
            }
        }

        .rightContent {
            img {
                width: 18px;
            }
        }
    }
`

const Navigation = () => {
    const router = useRouter();

    return (
        <NavigationDetails>
            <div className="leftContent">
                <Link href="/"><img src="/msn.png" alt="" /></Link>

                <ul>
                    <li className={router.pathname === "/" ? "selected" : "non-selected"}>
                        <Link href="/">Início</Link>
                    </li>

                    <li className={router.pathname === "/posts" ? "selected" : "non-selected"}>
                        <Link href="/posts">Posts</Link>
                    </li>

                    {/* <li className="non-selected"><Link href="/">Fotos</Link></li> */}

                    <li className={router.pathname === "/review" ? "selected" : "non-selected"}>
                        <Link href="/review">Review</Link>
                    </li>
                </ul>
            </div>

            <div className="rightContent">
                <Link href="https://github.com/yagasaki7k" target="_blank"><img src="/samurai-white.png" alt="" /></Link>
            </div>
        </NavigationDetails>
    )
}

export default Navigation