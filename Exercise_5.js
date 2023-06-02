class TreeNode {
    constructor(value) {
      this.value = value;
      this.daughters = [];
    }
  
    addChild(daughter) {
      this.daughters.push(daughter);
    }
  }

  const tree = new TreeNode(10);
const node1 = new TreeNode(5);
const node2 = new TreeNode(8);
const node3 = new TreeNode(2);
const node4 = new TreeNode(3);
const node5 = new TreeNode(7);

tree.addChild(node1);
tree.addChild(node2);
node1.addChild(node3);
node1.addChild(node4);
node2.addChild(node5);

function findParentValue(root, target) {
    if (root.value === target) {
      return null; // Root node has no parent
    }
  
    for (const daughter of root.daughters) {
      if (daughter.value === target) {
        return root.value; // Found the parent node
      }
  
      const parentValue = findParentValue(daughter, target);
      if (parentValue !== null) {
        return parentValue; // Found the parent node in the subtree
      }
    }
  
    return null; // Target value not found in the tree
  }
  
  // Example usage:
  const parentValue = findParentValue(tree, 4);
  console.log("Parent value of 7:", parentValue);
  