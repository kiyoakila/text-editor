import React, { FC } from 'react'
import { Pane, Heading, Paragraph, Button, majorScale } from 'evergreen-ui'
import Link from 'next/link'

const PostPreview: FC<{ post: { title: string; summary: string; slug: string } }> = ({ post }) => {
  return (
    <Pane padding={majorScale(2)} border borderRadius={4}>
      <Heading size={700} fontWeight="bold" marginBottom={majorScale(2)}>
        <Link href={`/blog/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </Heading>

      <Paragraph marginBottom={majorScale(2)}>{post.summary}</Paragraph>
      <Pane textAlign="right">
        <Link href={`/blog/${post.slug}`}>
          <a>
            <Button appearance="minimal" color="#6E62B6" height={48}>
              Read
            </Button>
          </a>
        </Link>
      </Pane>
    </Pane>
  )
}
export default PostPreview
