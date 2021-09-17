import { Story, Meta } from '@storybook/react/types-6-0'
import Section from 'components/Section'
import Card from '.'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    bgButton: {
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
          'dark',
          'link',
          'outline-primary',
          'outline-secondary',
          'outline-success',
          'outline-info',
          'outline-warning',
          'outline-danger',
          'outline-light',
          'outline-dark'
        ]
      }
    }
  }
} as Meta

export const Default: Story = (args) => (
  <Section>
    <div className="col-sm-6 col-lg-3">
      <Card {...args} />
    </div>
  </Section>
)

Default.args = {
  urlImage: '/img/image-1.jpg',
  title: 'Title',
  textContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis faucibus arcu. Nunc dignissim vulputate mauris, interdum scelerisque sem placerat sit amet. In congue massa leo, id malesuada ligula ultrices ut. Vestibulum convallis, lacus id lacinia accumsan, justo ante sagittis tortor, eu posuere orci arcu sed turpis.',
  labelButton: 'See more',
  bgButton: 'danger',
  showArrowLink: true
}

export const NoImages: Story = (args) => (
  <Section>
    <div className="col-sm-6 col-lg-3">
      <Card {...args} />
    </div>
  </Section>
)

NoImages.args = {
  urlImage: '',
  title: 'Title',
  textContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis faucibus arcu. Nunc dignissim vulputate mauris, interdum scelerisque sem placerat sit amet. In congue massa leo, id malesuada ligula ultrices ut. Vestibulum convallis, lacus id lacinia accumsan, justo ante sagittis tortor, eu posuere orci arcu sed turpis.',
  labelButton: 'See more',
  bgButton: 'primary',
  showArrowLink: false
}
