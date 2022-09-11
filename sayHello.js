// function sayHello(firstName: string) {
//   console.log('Hello' + firstName);
// }
// let firstName: string = 'Takuya';
// let age: number = 36;
// sayHello(firstName);
// function calc(isSum: boolean) {
//   let a = 100;
//   if (isSum) {
//     let b = a + 1;
//     return b;
//   }
//   return b;
// }
// const user: {name: string; age: number} = {
//     name: 'Takuya',
//     age: 20
// }
// console.log(user.name)
// function genBirdsInfo(name: string): string[] {
//   return name.split(',');
// }
// // 関数の型を利用
// // (x: string) => string[]
// function singBirds(birdInfo: (x: string) => string[]): string {
//   return birdInfo('hato, kiji')[0] + 'piyo piyo'
// }
// console.log(singBirds(genBirdsInfo));
// console.log(singBirds('dobato')); // 型が合わないためエラー
// function printName(firstName: string, formatter: (name: string) => string) {
//   console.log(formatter(firstName));
// }
// function formatName(name: string): string {
//   return `${name} san`;
// }
// printName('Takuya', formatName);
// const age = 10
// console.log(age.length)
// const user = {
//   name: 'Tau',
//   age:36
// }
// console.log(user.age.length)
// function getUser(){
//   return {
//     name:'Takuya',
//     age:36
//   }
// }
// const user = getUser()
// // console.log(user.age.length)
// type Point = {
//   x: number;
//   y: number;
// };
// function printPoint(point: Point) {
//   console.log('x座標は${point.x}です');
//   console.log('y座標は${point.y}です');
// }
// printPoint({ x: 100, y: 100 });
// interface Point {
//   x: number;
//   y: number;
//   z?: number;
// }
// class Mypoint implements Point {
//   x: number;
//   y: number;
// }
// interface Colorful {
//   color: string;
// }
// interface Circle {
//   radius: number;
// }
// interface ColorfulCircle extends Colorful, Circle {}
// const cc: ColorfulCircle = {
//   color: '赤',
//   radius: 10,
// };
// class Point {
//   x: number;
//   y: number;
//   // 引数がない場合の初期値を指定する
//   constructor(x: number = 0, y: number = 0) {
//     this.x = x;
//     this.y = y;
//   }
//   // 戻り値がない関数を定義するためにvoidを指定
//   moveX(n: number): void {
//     this.x += n;
//   }
// }
// const point = new Point();
// point.moveX(10);
// console.log(`${point.x}, ${point.y}`); // 10, 0
// class Point3D extends Point {
//   z: number;
//   constructor(x: number = 0, y: number = 0, z: number = 0) {
//     // 継承元のコンストラクタを呼び出す
//     super(x, y);
//     this.z = z;
//   }
//   moveZ(n: number): void {
//     this.z += n;
//   }
// }
// const point3D = new Point3D();
// // 継承元のメソッドを呼び出すことができる
// point3D.moveX(10);
// point3D.moveZ(30);
// console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`);
// interface IUser {
//   name: string;
//   age: number;
//   sayHello: () => string; //引数なしで文字列を返す
// }
// class User implements IUser {
//   name: string;
//   age: number;
//   constructor() {
//     this.name = '';
//     this.age = 0;
//   }
//   // インターフェースに定義されているメソッドを実装しない場合、コンパイル時エラーになる
//   sayHello(): string {
//     return `こんにちは、私は${this.name}, ${this.age}歳です。`;
//   }
// }
// const user = new User();
// user.name = 'tomohiro';
// user.age = 30;
// console.log(user.sayHello());
// class BasePoint3D {
//   public x: number;
//   private y: number;
//   protected z: number;
// }
// // インスタンス化をおこなった場合のアクセス制御の例
// const basePoint = new BasePoint3D();
// basePoint.x;
// basePoint.y;
// basePoint.z;
// // クラスを継承した際のアクセス制御
// class ChildPoint extends BasePoint3D {
//   constructor() {
//     super();
//     this.x;
//     this.y;
//     this.z;
//   }
// }
// 数値ベース[Enum型]　名前のついた定数セットを定義できる
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// // enum Directionを参照
// let direction: Direction = Direction.Left;
// console.log(direction);
// 文字列ベース[Enum型]　名前のついた定数セットを定義できる
// enum Direction {
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT',
// }
// const value = 'DOWN';
// const enumValue = value as Direction;
// if (enumValue === Direction.Down) {
//   console.log('Down is selected');
// }
// ジェネリック型
// Tはクラス内で利用する仮の型の名前
// class Queue<T> {
//   // 内部にTの型の配列を初期化する
//   private array: T[] = [];
//   // Tの型の値を配列に追加する
//   push(item: T) {
//     this.array.push(item);
//   }
//   // Tの型の配列最初の値を取り出す
//   pop(): T | undefined {
//     return this.array.shift();
//   }
// }
// const queue = new Queue<number>(); // 数値型を扱うキューを生成。型を外側から指定して振る舞うクラスを記述する
// queue.push(111);
// queue.push(112);
// queue.push('hoge'); // number型ではないためコンパイルエラーとなる
// let str = 'fuga';
// str = queue.pop(); // strはnumber型ではないためコンパイル時エラーとなる
// Union型
// 変数や引数の宣言時にUnion型を指定して、numberもしくはstringを受け付けることができる
function printId(id) {
    console.log(id);
}
// numberでも正常に動作する
printId(11);
// stringでも正常に動作する
printId('22');
function printId(id) {
    console.log(id);
}
