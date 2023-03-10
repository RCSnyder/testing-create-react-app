import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

test("button has correct initial color and updates when clicked.", () => {
  render(<App />)

  // find an element with  a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" })

  // expect the backgrounde color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" })

  //click button
  fireEvent.click(colorButton)

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" })

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red")
})

test("initial conditions", () => {
  render(<App />)

  // check that the button starts enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  expect(colorButton).toBeEnabled()

  // check the checkbox starts unchecked
  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked()
})

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />)

  const checkbox = screen.getByRole("checkbox")
  const button = screen.getByRole("button")

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})
