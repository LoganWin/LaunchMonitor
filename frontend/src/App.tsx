import { type CSSProperties } from 'react'
import { Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core'

import { GalleryCard } from './Components/CommonComponents'
import NavBar from './Components/NavBar'

const galleryCards = [
  {
    id: 'card-1',
    title: 'Studio notes',
    subtitle: 'Weekly explorations and interface sketches.',
    backgroundImageUrl: 'Cabin-jpg.jpeg',
    offset: { x: -80, y: -160 },
    rotation: '-5deg',
    delay: '0s',
  },
  {
    id: 'card-2',
    title: 'Field recordings',
    subtitle: 'Moments captured while traveling with founders.',
    backgroundImageUrl:
      'Cabin-jpg.jpeg',
    offset: { x: -180, y: 80 },
    rotation: '7deg',
    delay: '0.8s',
  },
  {
    id: 'card-3',
    title: 'Process snapshots',
    subtitle: 'Behind-the-scenes of prototypes coming to life.',
    backgroundImageUrl:
      'Cabin-jpg.jpeg',
    offset: { x: 120, y: 100 },
    rotation: '-6deg',
    delay: '1.6s',
  },
]

export default function App() {
  return (
    <Box
      style={{
        height: '100vh',
        background: 'linear-gradient(180deg, #ffffff 0%, #edd7acff 100%)',
        color: '#1f2933',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <NavBar />

      <Container
        size="lg"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px 0',
          height: '100%',
        }}
      >
        <Group
          justify="space-between"
          align="center"
          gap="xl"
          style={{ width: '100%', flexWrap: 'nowrap' }}
        >
          <Stack gap="xl" maw={420} align="flex-start">
            <Stack gap="sm" align="flex-start">
              <Title style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', lineHeight: 1 }}>
                Logan Winters
              </Title>
              <Text size="lg" c="gray.7" style={{ maxWidth: 360 }}>
                I build digital experiences that feel warm, intentional, and delightfully crafted. This is a snapshot of
                what I&apos;m exploring now.
              </Text>
            </Stack>
            <Group gap="md" wrap="wrap">
              <Button size="md" radius="xl" variant="gradient" gradient={{ from: 'pink', to: 'orange' }}>
                Preview live
              </Button>
              <Button size="md" radius="xl" variant="subtle" color="gray.7">
                View components
              </Button>
            </Group>
          </Stack>

          <Box
            style={{
              position: 'relative',
              paddingTop: 'xl',
              pointerEvents: 'none',
            }}
          >
            {galleryCards.map((card) => (
              <GalleryCard
                key={card.id}
                className="floating-card"
                title={card.title}
                subtitle={card.subtitle}
                backgroundImageUrl={card.backgroundImageUrl}
                backgroundImageAlt={card.title}
                withGradient
                style={{
                  width: '228px',
                  height: '280px',
                  borderRadius: '20px',
                  position: 'absolute',
                  boxShadow: '0 24px 44px rgba(15, 23, 42, 0.18)',
                  top: '50%',
                  left: '50%',
                  transform: `translate(calc(-50% + ${card.offset.x}px), calc(-50% + ${card.offset.y}px))`,
                  animationDelay: card.delay,
                  '--initial-rotation': card.rotation,
                } as CSSProperties}
              />
            ))}
          </Box>
        </Group>
      </Container>
    </Box>
  )
}
