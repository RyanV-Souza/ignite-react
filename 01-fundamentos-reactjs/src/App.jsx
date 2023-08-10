import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Ryan Vieira"
        content="Aliqua velit irure occaecat exercitation aliqua."
      />
      <Post
        author="Ryan Vieira S"
        content="Aliquasss velit irure occaecat exercitation aliqua."
      />
    </>
  )
}
