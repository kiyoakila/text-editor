import React, { FC } from 'react'
import { Pane, Heading, Paragraph, majorScale } from 'evergreen-ui'

const Hero: FC<{ content: { title: string; body: string } }> = ({ content }) => {
  return (
    <Pane
      width="100%"
      display="flex"
      alignItems="center"
      paddingY={majorScale(8)}
      height={`calc(100vh - ${majorScale(9)}px)`}
    >
      <Pane paddingLeft="20px">
        <Heading
          fontSize="clamp(2rem, 8vw, 6rem)"
          lineHeight="clamp(2rem, 8vw, 6rem)"
          color="rgb(212, 100, 75)"
          fontWeight="900"
          marginBottom={majorScale(8)}
        >
          {content.title}
        </Heading>
        <Paragraph fontSize="clamp(1.2rem, 4vw, 1.5rem)" lineHeight="clamp(1.2rem, 4vw, 2rem)">
          {content.body}
        </Paragraph>
      </Pane>
    </Pane>
  )
}

export default Hero
