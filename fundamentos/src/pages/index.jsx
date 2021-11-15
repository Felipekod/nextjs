import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home(){
  return (
    <div>
        <Link href="/style">
            Style
        </Link>
    </div>
  )
}