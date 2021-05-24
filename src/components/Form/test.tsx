import { renderWithTheme } from 'utils/tests/helpers'

import { FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        My nice <a href="#">link</a>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-jSgupP {
        margin: 0.8rem 0;
      }

      .c0 .sc-gKsewC {
        margin: 3.2rem auto 1.6rem;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            My nice 
            <a
              href="#"
            >
              link
            </a>
          </div>
        </div>
      </body>
    `)
  })
})
