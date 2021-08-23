import { Progress, ProgressLabel, useBreakpointValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

export function ProgressBar({ games, guessed }) {
  const height = useBreakpointValue({
    base: '14rem',
    sm: '8rem',
    md: '4rem',
    lg: '3rem'
  })

  return (
    <CustomProgress
      max={games.length}
      value={guessed.length}
      borderRadius={4}
      height={height}
      m={4}
    >
      <ProgressLabel fontSize={14}>{guessed.length}/{games.length}</ProgressLabel>
    </CustomProgress>
  )
}

const CustomProgress = styled(Progress)`
  & > div:first-of-type {
    background: var(--chakra-colors-blue-500);
  }
`