import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/axios'
import { Header } from '../components/Header'
import { PostCard } from '../components/post-card'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
    fetchPostDetail()
  }, [])

  const markdown = `${post.body}`


  return (
    <div className="h-screen">
      <Header />

      <div className='mx-2'>
        <PostCard title={post.title} comments={post.comments} id={id!} />


        <ReactMarkdown
          className="max-w-4xl mx-auto flex flex-col gap-3 px-8 py-10 text-base-text"
          children={markdown}
          components={{
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <Prism
                  children={String(children).replace(/\n$/, '')}
                  PreTag="div"
                  language={match[1]}
                  style={dracula}
                // {...rest}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    </div>
  )
}