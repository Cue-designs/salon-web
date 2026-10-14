import fetchPost from "@/api/learn";
const page = async () => {
  const allPost = await fetchPost();
  const post = allPost.slice(0, 10);

  interface data {
    [idx: string]: string | undefined;
    title: string;
    body: string;
    header?: string;
    comment?: string;
  }
  return (
    <>
      <h1 className="text-2xl font-bold">News & Updates</h1>
      <p className="text-gray-500 text-sm">
        Data fetched cleanly via an external module.
      </p>
      {post.map((article: data) => (
        <div key={article.id}>
          <h2 className="font-semibold text-lg capitalize">{article.title}</h2>
          <p className="text-gray-600 text-sm">{article.body}</p>
        </div>
      ))}
    </>
  );
};

export default page;
