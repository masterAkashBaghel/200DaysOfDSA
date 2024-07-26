/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postOrder(root, res) {
  if (root == null) return;
  postOrder(root.left, res);
  postOrder(root.right, res);
  res.push(root.val);
}
var postorderTraversal = function (root) {
  let res = [];
  postOrder(root, res);
  return res;
};
