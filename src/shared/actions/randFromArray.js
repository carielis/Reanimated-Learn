/**
 * Получение случайного элемента массива
 * @param arr
 * @return {*}
 */
export function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
