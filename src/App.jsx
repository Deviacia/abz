import React from 'react'
import { Header, Container } from './components'
import { GetSection, PostSection } from './components/RequestSections'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <GetSection />
        <PostSection />
      </Container>
    </>
  )
}

export default App