/**
 * Sorts and returns a new list of objects alphabetically by key
 * @param {Array.<Object>} objectArray - an objectArray where the values of the objectKey is a string
 * @param {String} objectKey - the key by which to sort the objectArray
 * @returns {Array.<Object>} objectArray - the alphabetically sorted objectArray
 */
const sortObjectArrayAlphabetical = (objectArray, objectKey) =>
  [...objectArray].sort((a, b) => {
    const nameA = a[objectKey].toUpperCase();
    const nameB = b[objectKey].toUpperCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });

export default sortObjectArrayAlphabetical;
