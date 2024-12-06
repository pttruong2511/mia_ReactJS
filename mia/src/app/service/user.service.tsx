export async function login(username:any,password:any){
    return fetch(`http://localhost:3000/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
}