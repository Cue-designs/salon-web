const fetchPost = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (!res.ok) {
      throw new Error(` No post shown`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(`There was an error in the server ${error}`);
  }
};

export default fetchPost;

interface info {
  title: string;
  body: string;
  id: number;
}
export const createPost = async ({ title, body, id }: info) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: { " Content-Type": "application/json" },
      body: JSON.stringify({ title, body, id }),
    });
    const status = res.statusText;
    if (!res.ok) {
      return {
        sucess: false,
        message: `There has been issues with  the sever A ${status}`,
      };
    }
    const data = await res.json();

    return {
      data,
      sucess: true,
      message: `Sent ${status}`,
    };

    //i am trying to use it in another component
  } catch (error) {
    throw new Error(`There was an error in the server ${error}`);
  }
};

export const DeletePost = async (id: number) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
        headers: { " Content-Type": "application/json" },
      },
    );

    if (!res.ok) {
      const deleteId = id;
      return {
        sucess: false,
        message: `There was an error in removing this  ${deleteId}`,
      };
    }
    const data = await res.json();
    return { data, sucess: true, message: `This ${id} has been deleted` };
  } catch {
    console.log("There was an error in the server");
    return { sucess: false, message: `There was an error in the server` };
  }
};

export const UpdatePost = async (info: info) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${info.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      },
    );
    const data = await res.json();
    return { data, sucess: true, message: `Post updated successfully` };
  } catch (error) {
    throw new Error(`There was an error in the server ${error}`);
  }
};
