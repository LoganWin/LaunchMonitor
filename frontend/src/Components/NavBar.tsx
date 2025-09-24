import {Paper, Group, Text, Anchor, Button} from '@mantine/core'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
]

const NavBar = () => {
return(
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
);
}
export default NavBar;