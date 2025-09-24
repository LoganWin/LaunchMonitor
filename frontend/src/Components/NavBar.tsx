import { type FC } from 'react'
import { Anchor, Box, Button, Container, Group, Text } from '@mantine/core'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
]

const NavBar: FC = () => {
  return (
    <Box
      component="header"
      pos="sticky"
      top={0}
      py="sm"
      style={{
        zIndex: 1000,
        backdropFilter: 'blur(18px)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,248,238,0.78) 100%)',
        boxShadow: '0 12px 28px rgba(17, 24, 39, 0.1)',
      }}
    >
      <Container size="lg">
        <Group justify="center" align="center" wrap="nowrap">
          <Group gap="xl" visibleFrom="sm" fw={500} c="gray.6" >
            {navItems.map((item) => (
              <Anchor
                key={item.label}
                href={item.href}
                underline="never"
                c="gray.6"
                style={{ transition: 'color 120ms ease' }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = '#111827'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = 'var(--mantine-color-gray-6)'
                }}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  )
}

export default NavBar
