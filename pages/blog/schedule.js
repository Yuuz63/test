import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
// import { client } from 'lib/api'

// export default function Schedule() {
//     return <h1>記事のタイトル</h1>
// }

// export async function getStaticProps() {
//     const resPromise = client.get({
//         endpoint: "blogs",
//     })

//     try {
//         const res = await resPromise
//         console.log(res)
//     } catch (err) {
//         console.log(err)
//     }
//     return {
//         props: {},
//     }
// }

export default function Schedule(props) { 
    console.log(props)

    return (
        <Container>
            <h1>{props.title}</h1>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'
    const post = await getPostBySlug(slug)

    // console.log(post.title)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories, 
        },
    }
}