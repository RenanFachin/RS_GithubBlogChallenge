import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { UserCard } from "../components/user-card";
import { api } from "../lib/axios";


// api.github.com/users/${username}
export interface GithubDataProps {
  avatar_url: string
  bio: string
  username: string
  location: string
  followers: number
  html_url: string
  login: string
}

export function Blog() {
  const [userGithubData, setUserGithubData] = useState<GithubDataProps>({} as GithubDataProps)

  async function fetchGithubData() {
    const response = await api.get('/users/RenanFachin')

    const data = response.data

    setUserGithubData({
      username: data.username,
      avatar_url: data.avatar_url,
      bio: data.bio,
      followers: data.followers,
      html_url: data.html_url,
      location: data.location,
      login: data.login
    })
  }


  useEffect(() => {
    fetchGithubData()
  }, [])

  return (
    <div className="h-screen">
      <Header />

      <UserCard userInfo={userGithubData} />
    </div>
  )
}

