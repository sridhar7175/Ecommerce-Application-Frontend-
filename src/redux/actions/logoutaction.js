export const GET_LOGOUT = "GET_LOGOUT";

export function getLogout(user) {
  console.log("logout", user);
  return {
    type: GET_LOGOUT,
    user,
  };
}
