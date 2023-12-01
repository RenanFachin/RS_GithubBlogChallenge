import { useParams } from 'react-router-dom'

export function PostDetail() {
  const { id } = useParams()

  console.log(id)

  return (
    <div>
      <p className='text-white text-4xl'>Post de id = {id}</p>
    </div>
  )
}