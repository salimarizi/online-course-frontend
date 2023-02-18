const truncate = (text, n) => {
  return text.length > n ? text.slice(0, n - 1) + "..." : text;
};
export default truncate;
