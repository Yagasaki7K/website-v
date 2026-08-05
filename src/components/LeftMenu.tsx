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
    position: fixed;
    left: 18rem;

    .square {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        font-family: "Trebuchet MS", sans-serif;
        width: 14.5rem;
        padding: 0.5rem;
        border: 1px solid hsl(0 100% 8%);
        background: linear-gradient(0deg, hsl(0 100% 8%) 0%, hsl(0 100% 2%) 100%);

        .title {
            border-bottom: 1px solid hsl(0 100% 15%);
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
            color: hsl(0 100% 25%);
            text-decoration: underline;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                margin-top: -1rem;
                padding: 1rem 0;
    
                a {
                    color: hsl(0 100% 25%);
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                        color: hsl(0 100% 35%);
                    }
                }
            }
        }

        .status {
            margin: 1rem 0;
            background: hsl(0 100% 25%);
            width: 90%;
            padding: 0.2rem 0.7rem;
            font-size: 0.9rem;
            display: flex;
            text-align: center;
            align-items: center;
            gap: 0.4rem;
            border-left: 2px solid hsl(0 100% 40%);

            span {
                background: hsl(0 100% 25%);
                border-radius: 50%;
                width: 6px;
                height: 6px;
                animation: 1.6s ease-in-out infinite blog-status-blink;
                display: block;
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
                        <li><Link href="/fotos"><span>⮞</span> Fotos</Link></li>
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