import { getPostBySlug, getAllSlugs } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/legacy/image'
// 画像読み込みのためのバッファー処理
import { getImageBuffer } from 'lib/getImageBuffer'

import { getPlaiceholder } from 'plaiceholder'
// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constant'

import PostBody from 'components/post-body'
import { TwoColumn,TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'

export default function Post({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description
}) {   
    return (
        <Container>
            <Meta
                pagetitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />

                <figure>
                    <Image 
                        src={eyecatch.url}
                        alt=""
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes='(min-width: 1152px) 1152px, 100vw'
                        priority
                        placeholder='blur'
                        blurDataURL={eyecatch.blurDataURL}
                    />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs()
    
    return (
        {
            paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
            fallback: false,
        }
    )
}

export async function getStaticProps( context ) {
    const slug = context.params.slug
    const post = await getPostBySlug(slug)
    const description = extractText(post.content)
    const eyecatch = post.eyecatch || eyecatchLocal
    const imageBuffer = await getImageBuffer(eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    eyecatch.blurDataURL = base64

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories, 
            description: description,
        },
    }
}