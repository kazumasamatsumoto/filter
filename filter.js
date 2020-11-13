'use strict';

// 連想配列を作成します
// Create an associative array
const animals = [
  {'id': 1, 'category': 'bird', 'type': 'fly', 'name': 'sparrow', },
  {'id': 2, 'category': 'bird', 'type': 'water', 'name': 'swallow'},
  {'id': 3, 'category': 'dog', 'type': 'water', 'name': 'shiba'},
  {'id': 4, 'category': 'bird', 'type': 'fly', 'name': 'crow'},
  {'id': 5, 'category': 'dog', 'type': 'fly', 'name': 'poodle'},
]

// 検索キーワードを宣言
// Declare your search keywords
// ここにカテゴリーのキーワードやタイプのキーワードなどやってみてください

const category = '';
const type = '';

// if (category == 'bird') {
// const result = animals.filter(item => item.category == category);
// console.log(result);
// }

// if (type == 'water') {
// const result = animals.filter(item => item.type == type);
// console.log(result);
// }

// if (type == 'water' && category == 'bird') {
// const result = animals.filter(item => item.type == type && item.category == category);
// console.log(result);
// }


// それぞれの条件によって処理を変更する
// Change the process for each condition


if (type == 'water' && category == 'bird') {
  const result = animals.filter(item => item.type == type && item.category == category);
  console.log(result);
} else if (type == 'water' && category == '') {
  const result = animals.filter(item => item.type == type);
  console.log(result);
} else if (type == '' && category == 'bird') {
  const result = animals.filter(item => item.category == category)
  console.log(result);
} else {
  console.log(animals);
}

// 綺麗な書き方は探してください
// Look for a clean writing style.