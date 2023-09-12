export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("userData");
  return user ? JSON.parse(user) : null;
};
