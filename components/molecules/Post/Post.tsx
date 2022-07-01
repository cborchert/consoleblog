import Head from "next/head";
import PostType from "../../../types/post";
import Layout from "../../layouts/Layout/Layout";

import styles from "./Post.module.scss";

type PropTypes = {
  post: PostType;
};

const Post = ({ post }: PropTypes) => (
  <Layout>
    <article>
      <Head>
        <title>{post.title}</title>
        {/* TODO Add meta */}
        {/* {post?.ogImage?.url && (
            <meta property="og:image" content={post.ogImage.url} />
          )} */}
      </Head>
      <header className={styles.Post__header}>
        <h1 className={styles.Post__title}>{post.title}</h1>
        <h5 className={styles.Post__date}>{post.date}</h5>
      </header>
      <main dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  </Layout>
);

export default Post;
