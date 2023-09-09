import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

import Footer from './index'

describe('Footer', () => {
  // Tests that the Footer component displays the correct text
  it('should display the correct text', () => {
    const wrapper = render(<Footer />)
    expect(wrapper).to('Hecho con ♥ ️MarcoGomesr')
  })
})
