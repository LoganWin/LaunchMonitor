import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'

import { GalleryCard } from './Components/CommonComponents'
import NavBar from './Components/NavBar'



const featureCards = [
  {
    title: 'Built for speed',
    description: 'Opinionated structure, sensible defaults, and components ready to customize when you are.',
  },
  {
    title: 'Responsive out of the box',
    description: 'Mantine layout primitives make it painless to craft flexible experiences for every screen.',
  },
  {
    title: 'Extend with ease',
    description: 'Drop in your sections, wire up data, and iterate quickly without wrestling CSS.',
  },
]

export default function App() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #ffffff 0%, #edd7acff 100%)',
        color: '#1f2933',
        paddingBottom: '96px',
      }}
    >
      <NavBar/>

      <Container size="xl" px="md" style={{ paddingTop: '160px' }}>
        <Stack id="overview" gap="xl" align="center">
          <Stack gap="xs" maw={680} align="center">
            <Title ta="center" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: 1.05 }}>
              Launch your next idea with a calm, confident starting point
            </Title>
            <Text ta="center" size="lg" c="gray.7">
              A minimal Mantine-powered template that gives you the structure you need and the freedom to add your own
              story.
            </Text>
          </Stack>
          <Group gap="md" justify="center" wrap="wrap">
            <Button size="md" radius="xl" variant="gradient" gradient={{ from: 'pink', to: 'orange' }}>
              Preview live
            </Button>
            <Button size="md" radius="xl" variant="subtle" color="gray.7">
              View components
            </Button>
          </Group>
          
        </Stack>

        
      </Container>

      <Container size="xl" px="md" mt="80px" id="contact">
      
          <Stack gap="sm" align="center">
            <Title order={3} ta="center">
              About me
            </Title>
            <GalleryCard
              title="Starter card"
              subtitle="Swap in your own imagery here."
              backgroundImageUrl="/vite.svg"
              backgroundImageAlt="Vite logo"
              withGradient={false}
              style={{ width: '352px', height: '352px', borderRadius: '16px' }}
            />
            <Group gap="md" justify="center">
              <Button size="md" radius="xl" variant="gradient" gradient={{ from: 'pink', to: 'orange' }}>
                Duplicate project
              </Button>
              <Button size="md" radius="xl" variant="light" color="dark">
                Contact me
              </Button>
            </Group>
          </Stack>
        

        <Group justify="space-between" mt="xl" c="gray.5" wrap="wrap" gap="sm">
          <Text size="sm">© {new Date().getFullYear()} Polished Landing. Built with Mantine.</Text>
          <Group gap="md">
            <Anchor href="#" underline="never" c="gray.5">
              Privacy
            </Anchor>
            <Anchor href="#" underline="never" c="gray.5">
              Terms
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  )
}
