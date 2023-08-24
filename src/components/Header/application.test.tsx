import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '.'

describe('Header', () => {
  test('renders corretamente comentarios', () => {
    render(<Header itensNoCarrinho={[]} />)

    const firstComment = screen.getByTestId('frase-um')
    expect(firstComment).toBeInTheDocument()

    const secondComment = screen.getByTestId('frase-dois')
    expect(secondComment).toBeInTheDocument()
  })
})
