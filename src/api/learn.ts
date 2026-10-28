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