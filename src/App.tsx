// Contexto
import { BlogProvider } from "./context/blog-context";

// Rotas
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <Router />
      </BlogProvider>
    </BrowserRouter>
  )
}

