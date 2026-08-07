import styled from "styled-components";

const ArticleDetails = styled.div`
    width: calc(100% - 35rem);
    margin-left: 0rem;
    margin-top: 0rem;
    padding: 0.5rem 1rem;

    .header {
        padding: 0 1rem;
        display: flex;
        gap: 3rem;
        margin: 4rem 0 -2rem 14.5rem;

        .buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;

            .buttonsRight {
                display: flex;
                gap: 0.5rem;
            }

            a {
                background: hsl(0 100% 8%);
                border: none;
                color: #e2e8e6;
                padding: 0.5rem;
                font-family: "Tahoma", sans-serif;
                font-size: 0.8rem;
                border: 1px solid hsl(0 100% 15%);
                cursor: pointer;
                text-decoration: none;

                &:hover {
                    color: hsl(0 100% 40%);
                    border: 1px solid hsl(0 100% 25%);
                }
            }

            button {
                background: hsl(0 100% 8%);
                border: none;
                color: #e2e8e6;
                padding: 0.5rem;
                font-family: "Tahoma", sans-serif;
                font-size: 0.8rem;
                border: 1px solid hsl(0 100% 15%);
                cursor: pointer;

                &:hover {
                    color: hsl(0 100% 40%);
                    border: 1px solid hsl(0 100% 25%);
                }
            }
        }

        .leftContent {
            .tag {
                background: hsl(0 100% 8%);
                width: fit-content;
                padding: 0.5rem 1rem;
                font-family: "Tahoma", sans-serif;
                text-transform: uppercase;
                font-size: 0.8rem;
                font-weight: bold;
            }

            .titleArticle {
                color: #e2e8e6;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 5rem;
                font-weight: 900;
                letter-spacing: -.055em;
                overflow-wrap: break-word;
                text-align: left;
                max-width: 30rem;
                width: 30rem;
                line-height: 5rem;
            }

            .descriptionArticle {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin: 1rem 0;
                font-family: "Tahoma", sans-serif;
            }

            .authorArticle, .dateArticle, .timingReading {
                font-family: "Tahoma", sans-serif;
                font-size: 0.9rem;
                margin: 0;
            }
        }

        .rightContent {
            img {
                width: 55rem;
                max-width: 55rem;
                object-fit: cover;
                object-position: center;
            }
        }
    }

    .card {
        border-radius: 0 30px 0 0;
        border: 1px solid hsl(0 100% 8%);
        background: #0a0000;
        padding: 0.5rem 1rem;
        margin-top: 0.5rem;

        h1, h2, h3, h4, i, u, li {
            font-family: "Source Serif 4", sans-serif;
        }

        li {
            margin-bottom: 1rem;
            line-height: 1.65;
        }

        p {
            font-family: "Source Serif 4", sans-serif;
            font-weight: 400;
            line-height: 1.65;
            font-size: 1.2rem;
        }

        em {
            text-decoration: underline;
        }

        pre {
            margin: 1rem 0;
            border-radius: 8px;
            overflow: auto;
            background: #282a36;
            border: 1px solid #44475a;
            color: #f8f8f2;
        }

        pre code {
            display: block;
            padding: 1rem;
            font-family: var(--font-geist-mono);
            font-size: 14px;
            line-height: 1.5;
            white-space: pre;
            color: #f8f8f2;
            background: #282a36;
        }

        pre code .hljs-comment,
        pre code .hljs-quote {
            color: #6272a4;
        }

        pre code .hljs-keyword,
        pre code .hljs-selector-tag,
        pre code .hljs-literal,
        pre code .hljs-type {
            color: #ff79c6;
        }

        pre code .hljs-title,
        pre code .hljs-title.function_,
        pre code .hljs-function .hljs-title,
        pre code .hljs-variable,
        pre code .hljs-attr,
        pre code .hljs-property {
            color: #50fa7b;
        }

        pre code .hljs-string,
        pre code .hljs-subst,
        pre code .hljs-meta .hljs-string {
            color: #bd93f9;
        }

        pre code .hljs-number,
        pre code .hljs-symbol,
        pre code .hljs-bullet {
            color: #f1fa8c;
        }

        pre code .hljs-built_in,
        pre code .hljs-doctag {
            color: #8be9fd;
        }

        :not(pre) > code {
            position: relative;
            background: #282a36;
            color: #f8f8f2;
            border: 1px solid #44475a;
            border-radius: 8px;
            margin: 1rem 0;
            padding: 0.25rem 0.5rem;
            font-family: var(--font-geist-mono);
            font-size: 14px;
            line-height: 1.4;
            overflow: auto;
            white-space: pre-wrap;
            word-wrap: break-word;

            @media (max-width: 1024px) {
                font-size: 13px;
            }

            @media (max-width: 480px) {
                font-size: 12px;
            }
        }

        img {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0 auto;
        }
    }

    @media (max-width: 1600px) {
        width: calc(100% - 28rem);

        .header {
            margin: 3rem 0 -2rem 10rem;
            gap: 2rem;

            .leftContent {
                .titleArticle {
                    font-size: 4rem;
                    line-height: 4rem;
                    max-width: 28rem;
                }
            }

            .rightContent {
                img {
                    width: 45rem;
                    max-width: 45rem;
                }
            }
        }
    }

    @media (max-width: 1366px) {
        width: calc(100% - 23rem);

        .header {
            margin: 3rem 0 -2rem 6rem;
            gap: 2rem;

            .leftContent {
                .titleArticle {
                    font-size: 3.5rem;
                    line-height: 3.6rem;
                    max-width: 24rem;
                }
            }

            .rightContent {
                img {
                    width: 38rem;
                    max-width: 38rem;
                }
            }
        }

        .card {
            p {
                font-size: 1.1rem;
            }
        }
    }

    @media (max-width: 1200px) {
        width: calc(100% - 18rem);

        .header {
            margin: 2rem 0 0 2rem;
            gap: 2rem;

            .leftContent {
                .titleArticle {
                    font-size: 3rem;
                    line-height: 3.2rem;
                    max-width: 22rem;
                }
            }

            .rightContent {
                img {
                    width: 32rem;
                    max-width: 32rem;
                }
            }
        }

        .card {
            p {
                font-size: 1.05rem;
            }
        }
    }

    @media (max-width: 992px) {
        width: 100%;
        padding: 1rem;

        .header {
            margin: 2rem 0;
            padding: 0;
            flex-direction: column;
            gap: 2rem;

            .leftContent {
                width: 100%;

                .titleArticle {
                    max-width: 100%;
                    font-size: 3rem;
                    line-height: 3.2rem;
                }

                .descriptionArticle {
                    -webkit-line-clamp: unset;
                }

                .buttons {
                    flex-wrap: wrap;
                    gap: 1rem;

                    a {
                        width: 20rem;
                    }

                    button {
                        width: 20rem;
                    }
                }
            }

            .rightContent {
                width: 100%;

                img {
                    width: 100%;
                    max-width: 100%;
                }
            }
        }

        .card {
            margin-top: 2rem;
        }
    }

    @media (max-width: 768px) {
        padding: 0.75rem;

        .header {
            .leftContent {
                .tag {
                    font-size: 0.75rem;
                }

                .titleArticle {
                    font-size: 2.4rem;
                    line-height: 2.6rem;
                }

                .authorArticle,
                .dateArticle,
                .timingReading {
                    font-size: 0.8rem;
                }

                .buttons {
                    flex-direction: column;
                    gap: 0.75rem;

                    .buttonsRight {
                        width: 100%;
                        justify-content: space-between;
                    }

                    a,
                    button {
                        width: 100%;
                        text-align: center;
                    }
                }
            }
        }

        .card {
            p {
                font-size: 1rem;
                line-height: 1.8;
            }
        }
    }

    @media (max-width: 576px) {
        .header {
            .leftContent {
                .titleArticle {
                    font-size: 2rem;
                    line-height: 2.2rem;
                }

                .descriptionArticle {
                    font-size: 0.9rem;
                }

                .buttons {
                    .buttonsRight {
                        flex-direction: column;
                    }
                }
            }
        }

        .card {
            padding: 1rem;

            p {
                font-size: 0.95rem;
            }
        }
    }

    @media (max-width: 428px) {
        padding: 0.5rem;

        .header {
            margin: 1.5rem 0;

            .leftContent {
                .tag {
                    font-size: 0.7rem;
                    padding: 0.45rem 0.8rem;
                }

                .titleArticle {
                    font-size: 1.7rem;
                    line-height: 2rem;
                }

                .descriptionArticle {
                    font-size: 0.85rem;
                }

                .authorArticle,
                .dateArticle,
                .timingReading {
                    font-size: 0.75rem;
                }
            }
        }

        .card {
            border-radius: 12px;
            padding: 0.75rem;

            p {
                font-size: 0.9rem;
                line-height: 1.7;
            }
        }
    }
`

export default ArticleDetails