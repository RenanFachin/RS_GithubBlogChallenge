import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  title: string
  body: string
}

interface BlogContextType {
  post: Post[]
  fetchPostsFromGithubIssues: (query: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [post, setPost] = useState<Post[]>([])

  // Expor a função de load para fora do contexto
  async function fetchPostsFromGithubIssues(query: string = '') {
    const response = await api.get(`/search/issues?q=${query}%20repo:RenanFachin/RS_GithubBlogChallenge`)

    const data = response.data.items

    // console.log(data)

    setPost(data)
  }

  useEffect(() => {
    fetchPostsFromGithubIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ post, fetchPostsFromGithubIssues }}>
      {children}
    </BlogContext.Provider>
  )
}