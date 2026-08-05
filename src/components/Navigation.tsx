import Link from 'next/link'
import styled from 'styled-components'

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
`

const Navigation = () => {
    return (
        <NavigationDetails>
            <div className="leftContent">
                <Link href="/"><img src="/msn.png" alt="" /></Link>

                <ul>
                    <li className="selected"><Link href="/">Início</Link></li>
                    <li className="non-selected"><Link href="/">Posts</Link></li>
                    <li className="non-selected"><Link href="/">Fotos</Link></li>
                    <li className="non-selected"><Link href="/">Review</Link></li>
                </ul>
            </div>

            <div className="rightContent">
                <Link href="https://github.com/yagasaki7k" target="_blank"><img src="/samurai-white.png" alt="" /></Link>
            </div>
        </NavigationDetails>
    )
}

export default Navigation