import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
