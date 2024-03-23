import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
const BlogPage = () => {
  const postinfo = {
    img: "https://images.pexels.com/photos/17993401/pexels-photo-17993401.jpeg",
    title: "title",
    createdAt: "createAt",
    body: "hello world, this paragraph is desc",
    slug: "slug-1",
  };
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard post={postinfo} />
      </div>
      <div className={styles.post}>
        <PostCard post={postinfo} />
      </div>
      <div className={styles.post}>
        <PostCard post={postinfo} />
      </div>
      <div className={styles.post}>
        <PostCard post={postinfo} />
      </div>
    </div>
  );
};

export default BlogPage;
