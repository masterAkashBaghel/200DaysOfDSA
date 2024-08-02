/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preOrder(root, res) {
  if (root == null) return;
  else res.push(root.val);
  preOrder(root.left, res);
  preOrder(root.right, res);
}
var preorderTraversal = function (root) {
  let res = [];
  preOrder(root, res);
  return res;
};
