import { Data } from "@/app/names/crud";
interface Postcontent {
  body: Data;
}
export async function fetchData() {
  const apiUrl = process.env.NEXT_API_URL;
  if (!apiUrl) {
    return {
      success: false,
      message: "Server configuration error: NEXT_API_URL is missing.",
    };
  }
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return { success: false, message: "Invalid response" };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: `Server error ${error}` };
  }
}

export async function createPost(content: Postcontent) {
  const apiUrl = process.env.NEXT_API_URL;
  if (!apiUrl) {
    return {
      success: false,
      message: "Server configuration error: NEXT_API_URL is missing.",
    };
  }
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(content.body),
    });

    if (!response.ok) {
      return { success: false, message: "unable to get content" };
    }
    const data = await response.json();
    const status = response.status;
    return { data, status };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, message: errorMessage };
  }
}

export async function deletePost(PostId: number | string) {
  const apiUrl = process.env.NEXT_API_URL;
  if (!apiUrl) {
    return {
      success: false,
      message: "Server configuration error: NEXT_API_URL is missing.",
    };
  }
  const url = new URL(apiUrl);
  url.searchParams.append("id", String(PostId));
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });

    if (!response.ok) {
      return { success: false, message: "unable to delete content" };
    }
    if (
      response.status === 204 ||
      response.headers.get("content-length") === "0"
    ) {
      return { success: true, message: "Deleted successfully" };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, message: errorMessage };
  }
}

export async function updatePost({ title, content, PostId }: Data) {
  const apiUrl = process.env.NEXT_API_URL;
  if (!apiUrl) {
    return {
      success: false,
      message: "Server configuration error: NEXT_API_URL is missing.",
    };
  }

  const url = new URL(apiUrl);
  url.searchParams.append("id", String(PostId));
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      return { success: false, message: "unable to edit content" };
    }

    const data = await response.json();
    const status = response.status;
    return {
      success: true,
      data,
      status,
      message: "Your content has been edited  sucessfully",
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, message: errorMessage };
  }
}
