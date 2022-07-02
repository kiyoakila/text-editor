import React, { FC } from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import Container from '../components/container'
import Hero from '../components/hero'
import HomeNav from '../components/homeNav'
import FeatureSection from '../components/featureSection'
import { home } from '../content'

const Home: FC<{ content: { hero: any; features: any[] } }> = ({ content }) => {
  return (
    <Pane>
      <header>
        <HomeNav />
        <Pane backgroundColor="#E7E4F9">
          <Container>
            <Hero content={content.hero} />
          </Container>
        </Pane>
      </header>
      <main>
        {content.features.map((feature, i) => (
          <FeatureSection
            key={feature.title}
            title={feature.title}
            body={feature.body}
            image={`${feature.image}`}
            invert={i % 2 === 0}
          />
        ))}
      </main>
      <footer>
        <Pane background="#6E62B6" paddingY={majorScale(6)} textAlign="center">
          <Container>Made by Paprika Team © 2022</Container>
        </Pane>
      </footer>
    </Pane>
  )
}

export function getStaticProps(context) {
  return {
    props: {
      content: context.preview ? home.draft : home.published,
    },
  }
}

export default Home
