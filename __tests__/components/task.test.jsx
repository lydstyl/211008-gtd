/**
 * @jest-environment jsdom
 */

// import React from "react"
import { render, screen } from "@testing-library/react"
import Task from "../../components/task"

describe("Task", () => {
  it("Has a heading name.", () => {
    render(<Task />)

    const headingName = screen.getByRole("heading", {
      name: /^name:/i,
    })

    expect(headingName).toBeInTheDocument()
  })
})
