import React from 'react'
import Link from 'next/link'
import { Text } from 'evergreen-ui'

const Logo = ({ ...styles }) => {
  return (
    <Link href="/">
      <a>
        <Text fontSize="30px" color="rgb(228, 91, 66)" {...styles}>
          <strong>Paprika.</strong>
        </Text>
      </a>
    </Link>
  )
}

export default Logo
