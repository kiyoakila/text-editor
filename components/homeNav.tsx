import React, { FC } from 'react'
import { Pane, majorScale, Text, Button } from 'evergreen-ui'
import NextLink from 'next/link'
import { useSession } from 'next-auth/client'
import Container from './container'
import Logo from './logo'

const HomeNav: FC<{ links?: { name: string; link: string }[] }> = ({ links }) => {
  const [session] = useSession()

  return (
    <nav>
      <Pane width="100vw" paddingY={majorScale(1)} borderBottom height={majorScale(9)} backgroundColor="#6E62B6">
        <Container height="100%" paddingLeft="20px">
          <Pane display="flex" justifyContent="space-between" alignItems="center" height="100%">
            <Logo />

            <Pane display="flex" justifyContent="space-around" alignItems="center">
              {links && links.length > 0
                ? links.map((link) => (
                    <Pane paddingX={majorScale(3)} key={link.name}>
                      <NextLink href="/blog">
                        <a>
                          <Text fontSize="16px" color="rgb(212, 100, 75)" fontWeight="bold">
                            Blog
                          </Text>
                        </a>
                      </NextLink>
                    </Pane>
                  ))
                : null}

              <Pane paddingX={majorScale(3)}>
                <NextLink href={session ? '/app' : '/signin'}>
                  <a>
                    <Text fontSize="16px" color="rgb(212, 100, 75)" fontWeight="bold">
                      {session ? 'Dashboard' : 'Sign up'}
                    </Text>
                  </a>
                </NextLink>
              </Pane>
            </Pane>
          </Pane>
        </Container>
      </Pane>
    </nav>
  )
}

HomeNav.defaultProps = {
  links: [{ name: 'Blog', link: '/blog' }],
}

export default HomeNav
