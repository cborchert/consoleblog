import Link from "next/link";
import PostType from "../../../types/post";

type PropTypes = {
  post?: PostType;
};

const PostPreview = ({ post }: PropTypes) =>
  post?.slug ? (
    <div>
      <Link href={`/posts/${post.slug}`} key={post.slug}>
        <a>
          <h3>{post.title}</h3>
        </a>
      </Link>
      <h4>{post.date}</h4>
      {post.excerpt && <p>{post.excerpt}</p>}
    </div>
  ) : null;

export default PostPreview;
