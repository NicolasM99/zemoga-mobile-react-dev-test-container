export const objectToList: any = (objectData: object, level: number = 0, parent = []) => {
  const objectList = [...parent, ...Object.entries({ ...objectData })];
  const list = objectList.map((item: any) => {
    const key = item[0];
    const value = item[1];
    if (typeof value === 'object') {
      return objectToList(value, level + 1, [[key, '']]);
    }
    return {
      key,
      value,
      level
    };
  });
  let newList: any = [];
  list.forEach((item) => {
    if (item.length) {
      item.forEach((child: any) => {
        newList.push(child);
      });
      return;
    }
    if (!item.value) {
      newList.push({ ...item, level: item.level - 1 });
      return;
    }
    newList.push(item);
  });
  return newList;
};
