"use client"
import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {

  const pathName = usePathname();
  console.log('1' + pathName);
  console.log('2' + link.path);
  console.log(pathName == link.path);

  return (
    <Link href={link.path} className={`${styles.container} ${pathName == link.path && styles.active}`}>{link.title}</Link>
  )
}

export default NavLink
