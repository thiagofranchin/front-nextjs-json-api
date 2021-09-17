import { Story, Meta } from '@storybook/react/types-6-0'
import CardRow from '.'

export default {
  title: 'CardRow',
  component: CardRow,
  argTypes: {
    bgSection: {
      control: {
        type: 'select',
        options: [
          'transparent',
          'white',
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'light',
          'dark'
        ]
      }
    }
  }
} as Meta

export const Default: Story = (args) => <CardRow {...args} />
Default.args = {
  bgSection: 'light'
}
