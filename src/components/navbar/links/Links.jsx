import styles from './links.module.css';
import NavLink from "./navLink/navLink";

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

  return (links.map(link => (
        <NavLink key={link.id} link={link} />
      ))
  )
}

export default Links
