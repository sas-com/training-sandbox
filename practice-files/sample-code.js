// 練習用サンプルコード
// 自由に編集してGit操作を練習してください

/**
 * Hello World を出力する関数
 * @param {string} name - 挨拶する相手の名前
 * @returns {string} 挨拶メッセージ
 */
function greetUser(name = 'World') {
    return `Hello, ${name}!`;
}

/**
 * 現在の日時を取得する関数
 * @returns {string} フォーマットされた日時
 */
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString('ja-JP');
}

// 練習課題:
// 1. 新しい関数を追加してみる
// 2. 既存の関数を修正してみる  
// 3. コメントを追加してみる

// あなたのコードをここに書いてください:


// 実行例
console.log(greetUser('エス・エー・エス'));
console.log(`現在時刻: ${getCurrentDateTime()}`);

// TODO: 練習で追加した機能をここに書いてください