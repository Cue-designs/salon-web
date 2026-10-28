import { Data } from "@/app/names/crud";
interface Postcontent {
  body: Data
}
export async function  fetchData(){
 const  apiUrl = process.env.NEXT_API_URL;
    if (!apiUrl) {
      return { success: false, message: "Server configuration error: NEXT_API_URL is missing." };
  }
  try {
      const response = await fetch(apiUrl );
    if(!response.ok){
      return { success: false, message: "Invalid response"}
    }
    const data = await response.json()
    return data;
  } catch (error) {
    return { success: false, message:`Server error ${error}`}
  }
  
}

export async function createPost(content:Postcontent) {
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
        body: JSON.stringify(content.body)
      });

      if (!response.ok) {
        return {success: false, message: "unable to get content"}
      }
      const data = await response.json()
      const status = response.status
      return { data, status}
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    return { success: false, message: errorMessage }
  }
}