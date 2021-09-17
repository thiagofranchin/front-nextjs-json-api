import { Story, Meta } from '@storybook/react/types-6-0'
import Colors from '.'

export default {
  title: 'Colors',
  component: Colors,
  argTypes: {
    primary: { control: 'color' }
  }
} as Meta

export const Default: Story = (args) => <Colors {...args} />
