import FeaturedPosts from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"

export default function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs1",
      title: "Getting Startedith NextJS",
      image: "getting-started-nextjs.jpg",
      excerpt:
        "framework for production - itmakes building fullstack React apps and sites a breeze and ships with built-in SsR.",
      date: "2022-01-01"
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Startedith NextJS",
      image: "getting-started-nextjs.jpg",
      excerpt:
        "framework for production - itmakes building fullstack React apps and sites a breeze and ships with built-in SsR.",
      date: "2022-01-01"
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Startedith NextJS",
      image: "getting-started-nextjs.jpg",
      excerpt:
        "framework for production - itmakes building fullstack React apps and sites a breeze and ships with built-in SsR.",
      date: "2022-01-01"
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Startedith NextJS",
      image: "getting-started-nextjs.jpg",
      excerpt:
        "framework for production - itmakes building fullstack React apps and sites a breeze and ships with built-in SsR.",
      date: "2022-01-01"
    }
  ]
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}
