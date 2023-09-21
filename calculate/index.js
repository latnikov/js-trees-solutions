// @ts-check

import _ from 'lodash';
import {
  isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const getFilesSize = (tree) => {
  if (isFile(tree)) {
    return getMeta(tree).size;
  }

  const children = getChildren(tree);
  const descendantCounts = children.map(getFilesSize);
  return _.sum(descendantCounts);
};
const du = (tree) => {
  const children = getChildren(tree);
  const result = children
    .map((child) => [getName(child), getFilesSize(child)])
    .sort((a, b) => b[1] - a[1]);
  return result;
};
export default du;
// END