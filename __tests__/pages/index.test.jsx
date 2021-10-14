// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Page from '../../pages/index'

describe('Home page', () => {
  it('Renders a heading.', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', {
      name: /gtd/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
