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
console.log(myHometask);

interface MyArray<T> {
  [N: number]: T;
  reduce(fn: (sum: T, current: T) => T, result: T): T;
}
const arr: MyArray<number> = [1, 2, 3, 4, 5];
const result = arr.reduce(function (sum, current) {
  return sum + current;
}, 0);
console.log(result);
