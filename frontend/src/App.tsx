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

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
]

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
        background: 'linear-gradient(180deg, #fff6f0 0%, #ffffff 50%)',
        color: '#1f2933',
        paddingBottom: '96px',
      }}
    >
      <Paper
        withBorder
        radius="lg"
        shadow="xs"
        p="sm"
        pos="fixed"
        top={16}
        left="50%"
        style={{
          transform: 'translateX(-50%)',
          width: 'min(92%, 1080px)',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(229, 231, 235, 0.8)',
          zIndex: 1000,
        }}
      >
        <Group justify="space-between" wrap="nowrap">
          <Text fw={700}>Polished Landing</Text>
          <Group gap="lg" visibleFrom="sm" fw={500} c="gray.6">
            {navItems.map((item) => (
              <Anchor key={item.label} href={item.href} underline="never" c="gray.6">
                {item.label}
              </Anchor>
            ))}
          </Group>
          <Group gap="sm" wrap="nowrap">
            <Button radius="xl" variant="light" color="dark" visibleFrom="sm">
              Login
            </Button>
            <Button radius="xl" variant="gradient" gradient={{ from: 'pink', to: 'orange' }}>
              Get started
            </Button>
          </Group>
        </Group>
      </Paper>

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
          <Paper
            radius="lg"
            shadow="md"
            p="xl"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,245,240,0.9))',
              border: '1px solid rgba(229, 231, 235, 0.8)',
            }}
          >
            <Text ta="center" c="gray.6">
              Drop in your hero image, swap the copy, and expand sections as your content grows. This template keeps styling
              decisions lightweight so you can focus on substance.
            </Text>
          </Paper>
        </Stack>

        <Stack gap="lg" mt="80px" id="features">
          <Group justify="space-between" align="center">
            <Title order={2}>Why this template works</Title>
            <Button radius="xl" variant="light" color="dark">
              Documentation
            </Button>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {featureCards.map((card) => (
              <Card
                key={card.title}
                radius="lg"
                padding="xl"
                shadow="sm"
                withBorder
                style={{ borderColor: 'rgba(229, 231, 235, 0.85)', background: 'rgba(255, 255, 255, 0.95)' }}
              >
                <Stack gap="sm">
                  <Title order={4}>{card.title}</Title>
                  <Text c="gray.6">{card.description}</Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      <Container size="xl" px="md" mt="80px" id="contact">
        <Paper
          radius="lg"
          shadow="xl"
          p="xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,251,248,0.95), rgba(255,246,240,0.92))',
            border: '1px solid rgba(229, 231, 235, 0.85)',
          }}
        >
          <Stack gap="sm" align="center">
            <Title order={3} ta="center">
              Ready to make it yours?
            </Title>
            <Text ta="center" c="gray.6" maw={520}>
              Clone this layout, plug in your product story, and extend the sections that matter most. Keep the calm styling
              or swap in your own palette.
            </Text>
            <Group gap="md" justify="center">
              <Button size="md" radius="xl" variant="gradient" gradient={{ from: 'pink', to: 'orange' }}>
                Duplicate project
              </Button>
              <Button size="md" radius="xl" variant="light" color="dark">
                Contact me
              </Button>
            </Group>
          </Stack>
        </Paper>

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
