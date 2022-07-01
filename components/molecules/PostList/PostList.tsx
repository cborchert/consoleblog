import PostType from "../../../types/post";
import Card from "../../atoms/Card/Card";
import PostPreview from "../PostPreview/PostPreview";

type PropTypes = {
  posts?: PostType[];
};

const PostList = ({ posts = [] }: PropTypes) => (
  <div>
    {posts.map((post) => (
      <Card key={post.slug}>
        <PostPreview post={post} />
      </Card>
    ))}
  </div>
);

export default PostList;
