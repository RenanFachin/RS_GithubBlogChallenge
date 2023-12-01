import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/axios'

interface Post {
  title: string
  body: string
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
        title: data.title
      })

    } catch (error) {
      console.log(error)
    }
  }

  // console.log(post)

  useEffect(() => {
    fetchPostDetail()
  }, [])


  return (
    <div>
      <p className='text-white text-4xl'>Post de id = {id}</p>
      <h1>{post.title}</h1>
      <span>
        {post.body}
      </span>
    </div>
  )
}