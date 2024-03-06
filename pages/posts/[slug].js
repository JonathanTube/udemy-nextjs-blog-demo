import PostContent from "@/components/posts/post-detail/post-content"
import { getPostData } from "@/lib/posts-utils"

export default function PostPage({ post }) {
  return <PostContent post={post} />
}

export async function getStaticProps(context) {
  const { params } = context

  const { slug } = params

  const postData = await getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 60
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}
