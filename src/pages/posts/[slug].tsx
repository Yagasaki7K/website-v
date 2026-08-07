import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps } from "next";
import calculateReadingTime from "@/utils/calculateReadingTime";
import formatDate from "@/utils/formatDate";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import { Frontmatter } from "@/types/Frontmatter";
import { PostProps } from "@/types/PostProps";
import { useEffect } from "react";
import LeftMenu from "@/components/LeftMenu";
import HomeDetails from "@/components/HomeDetails";
import RightMenu from "@/components/RightMenu";
import ArticleDetails from "@/components/ArticleDetails";
import Link from "next/link";

declare global {
    interface Window {
        hljs?: {
            highlightAll: () => void;
        };
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const articlesDirectory = path.join("posts");
    const fileNames = fs.readdirSync(articlesDirectory);
    const paths = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => ({
            params: { slug: fileName.replace(/\.md$/, "") },
        }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
    const slug = params?.slug as string;
    if (!slug) {
        return { notFound: true };
    }

    const filePath = path.join("posts", `${slug}.md`);
    if (!fs.existsSync(filePath)) {
        return { notFound: true };
    }

    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatterData, content } = matter(markdownWithMeta);

    if (!content) {
        console.error(`Content not found for slug: ${slug}`);
        return { notFound: true };
    }

    const frontmatter = frontmatterData as Partial<Frontmatter>;
    const hasRequiredFrontmatterFields =
        !!frontmatter.title &&
        !!frontmatter.image &&
        Array.isArray(frontmatter.tags) &&
        !!frontmatter.date &&
        !!frontmatter.excerpt;

    if (!hasRequiredFrontmatterFields) {
        console.error(`Invalid frontmatter for slug: ${slug}`);
        return { notFound: true };
    }

    const validatedFrontmatter: Frontmatter = {
        slug: frontmatter.slug ?? slug,
        title: frontmatter.title!,
        image: frontmatter.image!,
        authors: frontmatter.authors ?? [],
        tags: frontmatter.tags!,
        date: frontmatter.date!,
        excerpt: frontmatter.excerpt!,
    };

    const renderedContent = await marked(content);

    return {
        props: {
            frontmatter: validatedFrontmatter,
            slug,
            content: renderedContent || "",
            viewCount: 0,
            date: validatedFrontmatter.date ?? "",
            readingTime: calculateReadingTime(renderedContent || ""),
        },
    };
};

export default function PostPage({
    frontmatter,
    content = "",
}: PostProps) {
    const articlePath = `/posts/${frontmatter?.slug ?? ""}`;
    const canonicalUrl = `https://yagasaki.vercel.app${articlePath}`;
    const normalizedImage = frontmatter?.image?.startsWith("http")
        ? frontmatter.image
        : `https://yagasaki.vercel.app${frontmatter?.image?.startsWith("/") ? "" : "/"}${frontmatter?.image ?? ""}`;

    useEffect(() => {
        if (typeof window !== "undefined" && content) {
            window.hljs?.highlightAll();
        }
    }, [content]);

    if (
        !frontmatter ||
        !frontmatter.title ||
        !frontmatter.excerpt ||
        !frontmatter.date ||
        !frontmatter.image ||
        !content
    ) {
        return <p>Conteúdo não disponível</p>;
    }

    return (
        <>
            <NextSeo
                title={frontmatter.title || "Post"}
                description={frontmatter.excerpt || "Descrição indisponível"}
                canonical={canonicalUrl}
                openGraph={{
                    url: canonicalUrl,
                    title: frontmatter.title || "Post",
                    description: frontmatter.excerpt || "Descrição indisponível",
                    images: normalizedImage
                        ? [
                            {
                                url: normalizedImage,
                                width: 460,
                                height: 460,
                                alt: frontmatter.title || "Imagem",
                                type: frontmatter.image.includes(".png")
                                    ? "image/png"
                                    : "image/jpeg",
                            },
                        ]
                        : [],
                    siteName: "Anderson Marlon",
                    type: "article",
                }}
                twitter={{
                    handle: "@yagasaki7k",
                    site: "@yagasaki7k",
                    cardType: "summary_large_image",
                }}
                additionalMetaTags={[
                    { property: "twitter:image", content: normalizedImage },
                    { property: "twitter:url", content: canonicalUrl },
                ]}
            />

            <title>{frontmatter.title + " | Anderson Marlon" || "Anderson Marlon"}</title>
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    href="/samurai-white.png"
                />
            </Head>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
                strategy="afterInteractive"
                onLoad={() => window.hljs?.highlightAll()}
            />

            <Navigation />

            <>
                <HomeDetails>
                    <ArticleDetails>
                        <div className="header">
                            <div className="leftContent">
                                <div className="tag">{frontmatter.tags}</div>
                                <div className="titleArticle">{frontmatter.title}</div>
                                <div className="descriptionArticle">{frontmatter?.excerpt}</div>

                                <p className="authorArticle">Por <strong>Anderson Marlon</strong></p>
                                <div className="dateArticle">{formatDate(frontmatter.date)}</div>
                                <div className="timingReading">
                                    {calculateReadingTime(content)} min de leitura
                                </div>

                                <div className="buttons">
                                    <Link href="/posts">‹ voltar aos posts</Link>

                                    <div className="buttonsRight">
                                        <Link href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(frontmatter.title + "\n\n") + "&url=https://cdnmv.vercel.app/posts/" + frontmatter.slug} target="_blank"> Twitter </Link>
                                        <button
                                            onClick={async (e) => {
                                                const target = e.currentTarget;
                                                const originalText = target.textContent;
                                                try {
                                                    await navigator.clipboard.writeText(window.location.href);
                                                    target.textContent = 'Link copiado';
                                                    setTimeout(() => {
                                                        target.textContent = originalText;
                                                    }, 2000);
                                                } catch (error) {
                                                    console.error('Erro ao copiar link:', error);
                                                }
                                            }}
                                        >
                                            Copiar link
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="rightContent">
                                <img src={frontmatter.image} alt={frontmatter.title} />
                            </div>
                        </div>
                    </ArticleDetails>

                    <div className="content">
                        <LeftMenu />
                        <ArticleDetails>
                            <div className="card card-page text">
                                <div className="title">
                                    <h1 className="post-title">
                                        {frontmatter.title || "Título indisponível"}
                                    </h1>
                                </div>

                                <div className="details">
                                    <div className="date">
                                        <p>
                                            Publicado em <span>{formatDate(frontmatter.date)}</span>
                                        </p>
                                    </div>
                                    <div className="tags">
                                        <p className="minRead">
                                            Leitura de {calculateReadingTime(content)} minutos
                                        </p>
                                    </div>
                                </div>
                                <div className="post-body">
                                    <div dangerouslySetInnerHTML={{ __html: content ?? "" }} />
                                </div>
                            </div>
                        </ArticleDetails>
                        <RightMenu />
                    </div>
                </HomeDetails>
            </>
        </>
    );
}
