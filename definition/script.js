// @ts-check

// BEGIN (write your solution here)
export default (tree) => {
  const result = tree.filter((child) => Array.isArray(child)).flat();
  return result;
};
// END
