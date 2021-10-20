const concat = (str1: string, str2: string): string => {
  return str1 + str2;
};
concat('a', 'b');

interface IHometask {
  howIDoIt: string;
  simeArray: (string | number)[];
}
interface IMyHometask extends IHometask {
  withData: [IHometask];
}
const myHometask: IMyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface MyArray<T> {
  [N: number]: T;
  reduce<U>(fn: (sum: U, current: T) => U, result: U): U;
}
const arr: MyArray<number> = [1, 2, 3, 4, 5];
const result = arr.reduce((sum, current) => {
  return sum + current;
}, 0);

const toCapitalizeFirstLe = (str: string): string => {
  return (
    str &&
    str[0].toUpperCase() +
      str
        .slice(1)
        .split('')
        .map((item) => item.toLowerCase())
        .join('')
  );
};

export default toCapitalizeFirstLe;
