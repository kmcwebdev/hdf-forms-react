export const sanitizeObjProperty = <T extends object>(obj: T) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const IS_NOTHING =
        obj[key] === undefined ||
        obj[key] === null ||
        String(obj[key])?.length === 0;

      if (IS_NOTHING) {
        delete obj[key];
      }
    }
  }

  return obj;
};
