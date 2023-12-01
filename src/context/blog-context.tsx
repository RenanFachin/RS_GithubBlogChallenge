import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  title: string,
  body: string
}

interface BlogContextType {
  post: Post[]
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [post, setPost] = useState<Post[]>([])

  async function loadPostsFromGithubIssues() {
    const response = await api.get('/search/issues?q=tailwindcss%20repo:RenanFachin/RS_GithubBlogChallenge')

    const data = response.data

    console.log(data.items)
  }

  useEffect(() => {
    // loadPostsFromGithubIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ post }}>
      {children}
    </BlogContext.Provider>
  )
}