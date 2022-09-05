/**
 * 【const,let等の変数宣言】
 */

//let val2 = "let変数";
//console.log(val2);

/*letは上書きが可能*/
//val2 = "let上書き";
//console.log(val2);

/*letは再宣言不可*/
//let val2 = "let再宣言";
//console.log(val2);

/* constは上書き、再宣言不可だがオブジェクト内のプロパティの変更は可能 */

/** ========================================================== */
/**
 * 【テンプレート文字列】
 */
// const name = "田中";
// const age = 28;

// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

/** ========================================================== */
/**
 * 【アロー関数】
 */
///■■■従来の関数
// function func1(str) {
//   return str;
// }

/**下記のように関数を変数に格納もできる */
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//■■■アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

/** returnは省略が可能 */
// const func3 = (str) => str;
// console.log(func3("func3です"));

/** ========================================================== */
/**
 * 【分割代入】
 */
// const myProfile = {
//   name: "田中",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

/** オブジェクトからプロパティを取り出すことができる */
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/** 分割代入は配列にも使用できる */
// const myProfile = ["田中", 38];

/*受け取る側はオブジェクト、配列によって記号が違う
 *オブジェクト：{}、配列：[]（配列は順番に格納する） */
// const [name, age] = myProfile;

// const message3 = `名前は${name}です。年齢は${age}です。`;
// console.log(message3);

/** ========================================================== */
/**
 * 【デフォルト値、引数など】
 */
//const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
//sayHello();

/** ========================================================== */
/**
 * 【スプレッド構文 ...】
 */
//■■■配列の展開
// const arr1 = [1, 2];
// console.log(...arr1);
/* 「...配列の変数」は、配列の中を順番に処理している */

// const sumFunc = (num1, num2) => console.log(num1 + num2);
/* 下記はどちらも同じ結果となる */
// sumFunc(arr1[0], arr1[1]); //従来の方法
// sumFunc(...arr1); //配列に対してスプレッド構文を使用した方法

//■■■まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);
/** 分割代入でスプレッド構文を使用するとそれ以降の値を配列でまとめてることができる */

//■■■配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

//コピー
// const arr6 = [...arr4];
// console.log(arr6);

//結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/** =で配列に格納した場合、格納後の変数の内容を変更すると参照元も変わってしまう */
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);
//上記のarr8とarr4はどちらも[0]の値が「100」に変わってしまっている

/** ========================================================== */
/**
 * 【mapやfilterを使った配列の処理】
 */
/* 従来はfor文だったが今はmapやfilterを使用する*/
// const nameArr = ["田中", "山田", "加藤"];

//■■■mapの場合
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));
//index番号を表示する場合（第1引数は配列の内容、第2引数はindex番号）
// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));

//■■■filterの場合（ある条件に一致する物だけ出力）
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; // returnに条件式を記述する
// });
// console.log(newNumArr);

//■■■実践編
// const newNameArr = nameArr.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/** ========================================================== */
/**
 * 【論理演算子の本当の意味を知る || &&】
 */
// || は左側がfalseなら右側を返す
const num = "";
const num2 = "";
const fee = num || "金額が未設定です。";

/*
下記if文は、左側「num」がfalseなら右側の「num2」の値を返す
この場合、num2の値が「fale」なら、「if(false){ ～ }」となり、if文内の処理は実行されない
逆にnum2の値が「true」なら、「if(true){ ～ }」となりif文内の処理は実行する
※num1が「true」の場合は、num1の値が出力されるので「if(true){ ～ }」となる
*/
if (num || num2) {
  //処理
}

//&& は左側がtrueなら右側を返す
const num3 = "";
const num4 = "";
const fee2 = num3 && "何かが設定されました。";

/*
下記if文は、左側「num」がtrueなら右側の「num4」の値を返す
この場合、num4の値が「fale」なら、「if(false){ ～ }」となり、if文内の処理は実行されない
逆にnum4の値が「true」なら、「if(true){ ～ }」となりif文内の処理は実行する
※num3が「false」の場合は、num1の値が出力されるので「if(false){ ～ }」となる
*/
if (num3 && num4) {
  //処理
}
