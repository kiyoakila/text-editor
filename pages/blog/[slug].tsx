import React, { FC } from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import { majorScale, Pane, Heading, Spinner } from 'evergreen-ui'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import { useRouter } from 'next/router'
import { Post } from '../../types'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import matter from 'gray-matter'
import { posts } from '../../content'

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  const content = hydrate(source)
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    )
  }
  return (
    <Pane>
      <Head>
        <title>{`Paprika Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginY={majorScale(3)}>
            {frontMatter.title}
          </Heading>
          <Pane>{content}</Pane>
        </Container>
      </main>
    </Pane>
  )
}

BlogPost.defaultProps = {
  source: '',
  frontMatter: { title: 'default title', summary: 'summary', publishedOn: '' },
}

export async function getStaticPaths() {
  const postsPath = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsPath)
  const slugs = filenames.map((filename) => {
    const filePath = path.join(postsPath, filename)
    const file = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(file)
    return data
  })
  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug } })),
    fallback: true,
  }
}
export async function getStaticProps({ params, preview }) {
  let post
  // is the slug for a file system post or cms post
  try {
    const postPath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`)
    post = fs.readFileSync(postPath, 'utf-8')
  } catch {
    const cmsPosts = (preview ? posts.draft : posts.published).map((p) => {
      return matter(p)
    })

    const match = cmsPosts.find((p) => p.data.slug === params.slug)
    post = match.content
  }

  if (!post) {
    throw new Error('no post')
  }

  const { data } = matter(post)
  const mdxSource = await renderToString(post, { scope: data })
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export default BlogPost
