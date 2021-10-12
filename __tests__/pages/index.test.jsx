// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home', () => {
  it('Renders a heading.', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /gtd/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('Renders collect, todo & waiting task lists.', () => {
    render(<Home />)

    const collectList = screen.getByRole('list', {
      name: /collect/i,
    })
    const todoList = screen.getByRole('list', {
      name: /to\sdo/i,
    })
    const waitingList = screen.getByRole('list', {
      name: /waiting/i,
    })

    expect(collectList).toBeInTheDocument()
    expect(todoList).toBeInTheDocument()
    expect(waitingList).toBeInTheDocument()
  })
})
