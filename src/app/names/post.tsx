import { fetchData } from "@/api/learn";
import { Data } from "./crud";
const PostList = async () => {
  const res = await fetchData();
  const fetched = res.data || [];
  return (
    <div>
      {fetched.map((post: Data) => (
        <div key={post.id}>
          <div>
            <span>{post.id}</span>
          </div>
          <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
