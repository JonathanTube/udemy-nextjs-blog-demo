import PostItem from "./post-item"
import classes from "./posts-grid.module.css"

export default function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostItem key={post.slug} {...post} />
        </li>
      ))}
    </ul>
  )
}
