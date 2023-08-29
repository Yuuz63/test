import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import {TwoColumn, TwoColumnMain, TwoColumnSidebar} from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About() {
    return (
        <Container>
            <Meta
                pageTitle="アバウト"
                pageDesc="About development activities"
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />

            <Hero title="About" subtitle="About development activities"/>

            <figure>
                <Image 
                    src={eyecatch}
                    alt=""
                    layout="responsive"
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder='blur'
                />
            </figure>

            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>
                            Cubeが得意とする分野はものづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざまな
                            技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p>
                        <h2>ものづくりで目指していること</h2>
                        <p>
                            Cubeが得意とする分野はものづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざまな
                            技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p><p>
                            Cubeが得意とする分野はものづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざまな
                            技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p>
                        <h3>新しいことへのチャレンジ</h3>
                        <p>
                            Cubeが得意とする分野はものづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざまな
                            技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p>
                    </PostBody>
                </TwoColumnMain>

                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}