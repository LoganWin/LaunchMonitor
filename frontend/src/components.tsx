import { useState } from 'react'
import { Box, Paper, Stack, Text, type PaperProps, type TextProps } from '@mantine/core'

export type GalleryCardProps = PaperProps & {
  /** Background image of the card */
  backgroundImageUrl?: string

  /** Alt text for the background image */
  backgroundImageAlt?: string

  /** Title of the card */
  title?: string

  /** Props for the title */
  titleProps?: TextProps

  /** Subtitle of the card */
  subtitle?: string

  /** Props for the subtitle */
  subtitleProps?: TextProps

  /** Whether to show the gradient overlay */
  withGradient?: boolean
}

export function GalleryCard({
  title,
  subtitle,
  backgroundImageUrl,
  backgroundImageAlt,
  titleProps = { style: { textWrap: 'balance' } },
  subtitleProps = { style: { textWrap: 'balance' } },
  style,
  withGradient = true,
  ...paperProps
}: GalleryCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Paper
      p="md"
      pos="relative"
      style={{ overflow: 'hidden', cursor: 'pointer', ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...paperProps}
    >
      {backgroundImageUrl && (
        <Box
          role="img"
          aria-label={backgroundImageAlt}
          style={{
            position: 'absolute',
            top: '-5%',
            left: '-5%',
            right: '-5%',
            bottom: '-5%',
            zIndex: 0,
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 200ms ease',
          }}
        />
      )}
      {withGradient && (
        <Box
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '70%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      )}
      <Stack
        gap={0}
        h="100%"
        justify="end"
        pos="relative"
        style={{
          zIndex: 2,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {title && (
          <Text c="white" fz="lg" fw="bold" {...titleProps}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text c="white" fz="md" {...subtitleProps}>
            {subtitle}
          </Text>
        )}
      </Stack>
    </Paper>
  )
}
