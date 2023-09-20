import _ from 'lodash';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

const getHiddenFilesCount = (tree) => {
  if (isFile(tree)) {
    if (getName(tree)[0] === '.') {
      return 1;
    }
    return 0;
  }

  const children = getChildren(tree);
  const descendantsCounts = children.map(getHiddenFilesCount);
  return _.sum(descendantsCounts);
};

export default getHiddenFilesCount;
