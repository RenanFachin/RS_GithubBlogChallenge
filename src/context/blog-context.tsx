import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  title: string
  body: string
  number: number
}

interface GithubDataProps {
  avatar_url: string
  bio: string
  name: string
  location: string
  followers: number
  html_url: string
  login: string
}

interface BlogContextType {
  post: Post[]
  userGithubData: GithubDataProps
  fetchPostsFromGithubIssues: (query: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [post, setPost] = useState<Post[]>([])
  const [userGithubData, setUserGithubData] = useState<GithubDataProps>({} as GithubDataProps)


  // Busca dados do usuário
  async function fetchGithubData() {
    // Chamada para API
    const response = await api.get('/users/RenanFachin')
    const data = response.data
    // console.log(data)

    // Armazenando cada dado de dentro do objeto conforme o retorno da API
    setUserGithubData({
      name: data.name,
      avatar_url: data.avatar_url,
      bio: data.bio,
      followers: data.followers,
      html_url: data.html_url,
      location: data.location,
      login: data.login
    })
  }

  // Expor a função de load para fora do contexto
  async function fetchPostsFromGithubIssues(query: string = '') {
    const response = await api.get(`/search/issues?q=${query}%20repo:RenanFachin/RS_GithubBlogChallenge`)

    const data = response.data.items

    console.log(data)

    setPost(data)
  }


  // Capturando detalhe do post
  async function fetchPostDetail(){
    const response = await api.get('/repos/RenanFachin/RS_GithubBlogChallenge/issues/1')

    console.log(response.data)
  }
  // 


  useEffect(() => {
    // fetchPostsFromGithubIssues()
    // fetchGithubData()
    // fetchPostDetail()
  }, [])

  return (
    <BlogContext.Provider value={{ post, userGithubData, fetchPostsFromGithubIssues }}>
      {children}
    </BlogContext.Provider>
  )
}