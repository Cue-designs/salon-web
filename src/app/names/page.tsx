import fetchPost from "@/api/learn";
import Crud from "./crud";

const page = async () => {
  const allPost = await fetchPost();
  return <Crud posts={allPost.slice(0, 10)} />;
};
export default page;
