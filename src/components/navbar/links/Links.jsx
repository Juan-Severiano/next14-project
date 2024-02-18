"use client"
import { useState } from 'react';
import styles from './links.module.css';
import NavLink from "./navLink/navLink";

const Links = () => {
  const [open, setOpen] = useState(false);

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

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink key={link.id} link={link} />
        ))}
        {
          session ?
            (
              <>
                {isAdmin && <NavLink key='Login' link={{ title: 'Admin', path: '/admin' }} />}
                <button className={styles.logout} type='button'>Logout</button>
              </>)
            : (
              <NavLink key='Login' link={{ title: 'Login', path: '/login' }} />
            )
        }
      </div>
      <button>Menu</button>
      {
        open && 
        <div className={styles.mobileLinks}>
          {
            links.map(link => <NavLink key={link.id} link={link} />)
          }
        </div>
      }
    </div>
  )
}

export default Links
