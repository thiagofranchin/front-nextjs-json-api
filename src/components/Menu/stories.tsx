import { Story, Meta } from '@storybook/react/types-6-0'
import Section from 'components/Section'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = (args) => (
  <Section>
    <Menu {...args} />
  </Section>
)

Default.args = {}
