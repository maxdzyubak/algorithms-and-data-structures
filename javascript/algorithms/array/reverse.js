const reverse = (coll) => {
  const lastIndex = coll.length - 1;
  const middleIndex = lastIndex / 2;
  for (let i = 0; i < middleIndex; i += 1) {
    const mirrorIndex = lastIndex - i;
    const temp = coll[i];
    coll[i] = coll[mirrorIndex];
    coll[mirrorIndex] = temp;
  }

  return coll;
};
