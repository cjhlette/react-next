// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p style={{ fontSize: 40 }}>Hello Next.js</p>
  </div>
)

export default Index
