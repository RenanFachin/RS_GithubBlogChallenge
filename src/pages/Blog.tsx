import { useContext } from "react";
import { Header } from "../components/Header";
import { UserCard } from "../components/user-card";
// import { api } from "../lib/axios";
import { SearchForm } from "./components/search-form";
import { BlogCard } from "./components/blog-card";
import { BlogContext } from "../context/blog-context";


// api.github.com/users/${username}
export interface GithubDataProps {
  avatar_url: string
  bio: string
  name: string
  location: string
  followers: number
  html_url: string
  login: string
}

export function Blog() {
  const { post, userGithubData } = useContext(BlogContext)


  return (
    <div className="h-screen">
      <Header />

      {/* Repassando o estado para o componente */}
      <UserCard userInfo={userGithubData} />

      <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base-subtitle text-lg font-bold leading-relaxed">Publicações</h2>

          <span className="text-base-span text-sm leading-relaxed">6 publicações</span>
        </div>
        <SearchForm />
      </div>

      <main className="max-w-4xl mx-auto mt-12 grid grid-cols-2 gap-8 pb-32">
        {
          post.map(item => {
            return (
              <BlogCard key={item.title} body={item.body} title={item.title} />
            )
          })
        }
      </main>
    </div >
  )
}

