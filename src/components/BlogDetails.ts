import styled from "styled-components";

const BlogDetails = styled.div`
    width: calc(100% - 35rem);
    height: fit-content;
    margin: 1.5rem 1rem 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0 30px 0 0;
    border: 1px solid hsl(0 100% 8%);
    background: linear-gradient(0deg, hsl(0 100% 8%) 0%, hsl(0 100% 2%) 100%);

    .blogSearch {
        h1 {
            font-family: "Tahoma", sans-serif;
        }

        input {
            font-family: "Tahoma", sans-serif;
            font-size: 0.8rem;
            outline: none;
            border: 1px solid hsl(0 100% 15%);
            background: hsl(0 100% 10%);
            color: hsl(0 100% 100%);
            padding: 0.75rem;
            width: 96.2%;
        }

        .article {
            padding: 1rem;
            width: 100%;
            margin-left: -1rem;

            .final {
                text-align: center;
                font-size: 0.8rem;
                font-family: "Tahoma", sans-serif;
                margin-bottom: 0;
            }

            a {
                text-decoration: none;
            }

            .contentBlog {
                font-family: "Tahoma", sans-serif;
                border: 1px solid hsl(0 100% 15%);
                padding: 1rem;
                display: flex;

                &:hover {
                    .infoBlog {
                        .title {
                            text-decoration: underline;
                        }

                        .description {
                            text-decoration: underline;
                        }
                    }    
                }

                img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                }

                .infoBlog {
                    margin-top: -0.5rem;
                    margin-left: 1rem;

                    .time {
                        font-size: 0.7rem;
                        display: flex;
                        gap: 1rem;
                        color: #ccc;

                        b {
                            text-transform: uppercase;
                            color: hsl(0 100% 30%);
                        }
                    }

                    .title {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        font-size: 0.9rem;
                        font-weight: bold;
                        color: hsl(0 100% 30%);
                    }

                    .description {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        font-size: 0.7rem;
                        color: #ccc;
                    }
                }
            }

            .contentBlogSelected {
                background: hsl(0 100% 6%);
            }
        }
    }

    @media (max-width: 1600px) {
        width: calc(100% - 28rem);
        margin-left: 13rem;

        .blogSearch {
            input {
                width: 95%;
            }
        }
    }

    @media (max-width: 1366px) {
        width: calc(100% - 23rem);
        margin-left: 11rem;

        .blogSearch {
            input {
                width: 94%;
            }

            .article {
                .contentBlog {
                    .infoBlog {
                        .title {
                            font-size: 0.85rem;
                        }

                        .description {
                            font-size: 0.68rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        width: calc(100% - 18rem);
        margin-left: 9rem;

        .blogSearch {
            input {
                width: 100%;
            }

            .article {
                .contentBlog {
                    gap: 1rem;

                    img {
                        width: 90px;
                        height: 90px;
                    }

                    .infoBlog {
                        margin-left: 0;

                        .time {
                            flex-wrap: wrap;
                            gap: 0.5rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 992px) {
        width: 100%;
        margin: 0;
        margin-top: 2rem;
        padding: 1rem;
        border-radius: 15px;

        .blogSearch {
            h1 {
                text-align: center;
            }

            input {
                width: 100%;
            }

            .article {
                width: 100%;
                margin-left: 0;
                padding: 1rem 0;

                .contentBlog {
                    img {
                        width: 100px;
                        height: 100px;
                    }

                    .infoBlog {
                        margin-top: 0;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;

        .blogSearch {
            .article {
                .contentBlog {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;

                    img {
                        width: 140px;
                        height: 140px;
                    }

                    .infoBlog {
                        margin: 1rem 0 0;

                        .time {
                            justify-content: center;
                            flex-wrap: wrap;
                        }

                        .title,
                        .description {
                            -webkit-line-clamp: unset;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 576px) {
        padding: 0.75rem;

        .blogSearch {
            h1 {
                font-size: 1.5rem;
            }

            input {
                font-size: 0.75rem;
                padding: 0.65rem;
            }

            .article {
                .contentBlog {
                    padding: 0.75rem;

                    img {
                        width: 120px;
                        height: 120px;
                    }

                    .infoBlog {
                        .time {
                            font-size: 0.65rem;
                        }

                        .title {
                            font-size: 0.8rem;
                        }

                        .description {
                            font-size: 0.65rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 428px) {
        padding: 0.5rem;

        .blogSearch {
            h1 {
                font-size: 1.3rem;
            }

            .article {
                .contentBlog {
                    padding: 0.75rem;

                    img {
                        width: 100%;
                        height: 180px;
                    }

                    .infoBlog {
                        .time {
                            flex-direction: column;
                            gap: 0.25rem;
                            align-items: center;
                        }

                        .title {
                            font-size: 0.78rem;
                        }

                        .description {
                            font-size: 0.65rem;
                        }
                    }
                }
            }
        }
    }
`

export default BlogDetails