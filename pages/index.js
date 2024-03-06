import FeaturedPosts from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"
import { getFeaturedPosts } from "@/lib/posts-utils"

export default function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  // console.log(allPosts)
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 1000
  }
}
