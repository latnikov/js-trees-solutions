import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees/index.js';
import _ from 'lodash';

const downCaseFileNames = (tree) => {
  const newMeta = _.cloneDeep(getMeta(tree));
  if (isFile(tree)) {
    return mkfile(getName(tree).toLowerCase(), newMeta);
  }
  const children = getChildren(tree).map(downCaseFileNames);
  return mkdir(getName(tree).children, newMeta);
};