import { Story, Meta } from '@storybook/react/types-6-0'
import References from '.'

export default {
  title: 'References',
  component: References,
  argTypes: {
    bgSection: {
      control: {
        type: 'select',
        options: [
          'transparent',
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
    },
    alignTitle: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end']
      }
    },
    colorTitle: {
      control: 'color'
    },
    alignBody: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end']
      }
    },
    colorText: {
      control: 'color'
    },
    paddingYSection: {
      control: {
        type: 'select',
        options: ['0', '1', '2', '3', '4', '5']
      }
    }
  }
} as Meta

export const Default: Story = (args) => <References {...args} />
Default.args = {
  bgSection: 'light',
  content: `<p>Paragraph create with tags html</p>`,
  isFluid: false,
  paddingYSection: '4',
  title: 'Title'
}
