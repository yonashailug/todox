import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'

test('render app', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})