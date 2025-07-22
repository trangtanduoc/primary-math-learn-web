// Save auth data (token, userId, role, etc.)
export const saveAuth = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
  };
  
  // Get auth data (returns null if not found)
  export const getAuth = () => {
    const data = localStorage.getItem("auth");
    return data ? JSON.parse(data) : null;
  };
  
  // Clear auth data on logout
  export const clearAuth = () => {
    localStorage.removeItem("auth");
  };
  