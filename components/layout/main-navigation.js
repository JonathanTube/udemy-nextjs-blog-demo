import Logo from "./logo"
import Link from "next/link"
import classes from "./main-navigation.module.css"
export default function MainNavigation() {
  return (
    <header className={classes.navigation}>
      <Link href="/" className={classes.logo}>
        <Logo />
      </Link>
      <div className={classes.env}>Enviroment: {process.env.title}</div>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
