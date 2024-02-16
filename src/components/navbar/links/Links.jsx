import Link from "next/link"

const Links = () => {

  const links = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    },
    {
      id: 2,
      title: 'About',
      path: '/about'
    },
    {
      id: 3,
      title: 'Contact',
      path: '/contact'
    },
    {
      id: 4,
      title: 'Blog',
      path: '/blog'
    },
  ]

  return (
    <div>
      { links.map(link => (
        <Link key={link.id} href={link.path}>{link.title}</Link>
      )) }
    </div>
  )
}

export default Links
