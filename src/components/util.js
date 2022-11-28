export const stringFix = (key) => {
  return key[0].toUpperCase() + key.slice(1).replace('_', ' ');
};
