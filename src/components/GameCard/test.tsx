import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const args = {
  title: 'Heading',
  developer: 'Developer',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: '235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...args} />)

    expect(
      screen.getByRole('heading', { name: args.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: args.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: args.title })).toHaveAttribute(
      'src',
      args.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...args} />)

    const price = screen.getByText(/235,00/i)

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render a line through in price when promotional', () => {
    renderWithTheme(<GameCard {...args} promotionalPrice="200,00" />)

    expect(screen.getByText(/235,00/i)).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText(/200,00/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite Icon when favorite is true', () => {
    renderWithTheme(<GameCard {...args} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...args} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...args}
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
