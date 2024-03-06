import AllPosts from "@/components/posts/all-posts"
import { getAllPosts } from "@/lib/posts-utils"
export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts
    },
    revalidate: 100
  }
}
