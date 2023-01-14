export const userQuery = (userId) => {
  return `*[_type== "user" && _id== '${userId}']`;
}