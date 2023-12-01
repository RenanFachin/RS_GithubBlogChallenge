import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { PostDetail } from './pages/PostDetail'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Blog />} />
      <Route path='/post/:id' element={<PostDetail />} />
    </Routes>
  )
}