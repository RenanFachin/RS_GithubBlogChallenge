import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/axios'
import { Header } from '../components/Header'
import { PostCard } from '../components/post-card'

interface Post {
  title: string
  body: string
  // created_at: Date
  comments: number
}


export function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState<Post>({} as Post)

  // Capturando detalhe do post
  async function fetchPostDetail() {
    try {
      const response = await api.get(`/repos/RenanFachin/RS_GithubBlogChallenge/issues/${id}`)

      const data = response.data

      // console.log(data)
      setPost({
        body: data.body,
        title: data.title,
        // created_at: data.created_at,
        comments: data.comments
      })

    } catch (error) {
      console.log(error)
    }
  }

  // console.log(post)

  useEffect(() => {
    // fetchPostDetail()
  }, [])


  return (
    <div className="h-screen">
      <Header />
      <PostCard title={post.title}  comments={post.comments}/>

      <div>
        {post.body}
      </div>
    </div>
  )
}