/* eslint-disable import/prefer-default-export */
// @ts-check

import _ from 'lodash';
import * as trees from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here) (write your solution here)
export const compressImages = (tree) => {
  const children = trees.getChildren(tree);
  const newChildren = children.map((child) => {
    const name = trees.getName(child);
    if (!trees.isFile(child) || !name.endsWith('.jpg')) {
      return child;
    }
    const meta = trees.getMeta(child);
    const newMeta = _.cloneDeep(meta);
    newMeta.size /= 2;
    return trees.mkfile(name, newMeta);
  });
  const newMeta = _.cloneDeep(trees.getMeta(tree));
  return trees.mkdir(trees.getName(tree), newChildren, newMeta);
};

export default compressImages;
// END
