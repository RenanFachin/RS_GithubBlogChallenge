import { BlogProvider } from "./context/blog-context";
import { Blog } from "./pages/Blog";

export function App() {
  return (
    <BlogProvider>
      <Blog />
    </BlogProvider>
  )
}

