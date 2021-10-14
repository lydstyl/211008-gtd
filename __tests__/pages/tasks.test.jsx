// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

// import React from 'react'
// import { render, screen, waitFor } from '@testing-library/react'
// import Page from '../../pages/tasks'

// import 'jest-dom/extend-expect'

// describe('Tasks page', () => {
//   jest.mock('/api/examples/protected')

//   it('Renders a heading.', async () => {
//     render(<Page />)

//     // await waitFor(async () => {
//     //   const heading = screen.findByRole('heading', {
//     //     name: /gtd/i,
//     //   })
//     //   expect(heading).toBeInTheDocument()
//     //   //   expect(mockAPI).toHaveBeenCalledTimes(1)
//     // })

//     const heading = await screen.findByRole('heading', {
//       name: /gtd/i,
//       timeout: 2000,
//     })
//     expect(heading).toBeInTheDocument()
//   })

//   it('Renders collect tasks list.', () => {
//     render(<Page />)

//     const collectList = screen.getByRole('list', {
//       name: /collect/i,
//     })

//     expect(collectList).toBeInTheDocument()
//   })

//   it('Renders todo task lists.', () => {
//     render(<Page />)

//     const todoList = screen.getByRole('list', {
//       name: /to\sdo/i,
//     })

//     expect(todoList).toBeInTheDocument()
//   })

//   it('Renders waiting task lists.', () => {
//     render(<Page />)

//     const waitingList = screen.getByRole('list', {
//       name: /waiting/i,
//     })

//     expect(waitingList).toBeInTheDocument()
//   })
// })

// __tests__/fetch.test.js

// import React from 'react'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
// import {
//   render,
//   fireEvent,
//   waitFor,
//   screen,
// } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import Fetch from '../fetch'

// const server = setupServer(
//   rest.get('/greeting', (req, res, ctx) => {
//     return res(ctx.json({ greeting: 'hello there' }))
//   }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test('loads and displays greeting', async () => {
//   render(<Fetch url='/greeting' />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('heading'))

//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toBeDisabled()
// })

// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500))
//     }),
//   )

//   render(<Fetch url='/greeting' />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('alert'))

//   expect(screen.getByRole('alert')).toHaveTextContent(
//     'Oops, failed to fetch!',
//   )
//   expect(screen.getByRole('button')).not.toBeDisabled()
// })
