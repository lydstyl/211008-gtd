/**
 * @jest-environment jsdom
 */

// import React from "react"
import { render, screen } from "@testing-library/react"
import Task from "../components/task"

describe("Task", () => {
  it("renders a heading", () => {
    render(<Task />)

    const heading = screen.getByRole("heading", {
      name: /task/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
