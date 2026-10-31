import { fetchData } from "@/api/learn";
import { Data } from "./crud";
const PostList = async () => {
  /*  const res = await fetchData();
  const fetched = Array.isArray(res) ? res : res.data || []; */
  const fetched = await fetchData();

  // Ensure it's treated as an array safely
  const posts = Array.isArray(fetched) ? fetched : [];
  return (
    <div>
      {posts.map((post: Data) => (
        <div key={post.id}>
          <div>
            <span>{post.id}</span>
          </div>
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
