# Git基本コマンド集

## 🚀 基本操作

### リポジトリの取得・初期化
```bash
# リポジトリをクローン
git clone <リポジトリURL>

# 新しいリポジトリを初期化
git init
```

### 状態確認
```bash
# 現在の状態を確認
git status

# 変更差分を確認
git diff

# コミット履歴を確認
git log
git log --oneline        # 1行表示
git log --graph          # グラフ表示
```

### ステージング・コミット
```bash
# ファイルをステージングエリアに追加
git add <ファイル名>
git add .               # 全ての変更ファイル
git add -A              # 全ての変更（削除含む）

# コミット
git commit -m "コミットメッセージ"
git commit -am "メッセージ"  # add + commit（新規ファイル以外）
```

### リモートリポジトリ操作
```bash
# リモートリポジトリに送信
git push origin <ブランチ名>
git push origin main

# リモートリポジトリから取得
git pull origin <ブランチ名>
git pull origin main

# リモートリポジトリの確認
git remote -v
```

## 🌿 ブランチ操作

### ブランチ作成・切り替え
```bash
# ブランチ一覧
git branch              # ローカルブランチ
git branch -r           # リモートブランチ
git branch -a           # 全てのブランチ

# ブランチ作成
git branch <ブランチ名>

# ブランチ切り替え
git checkout <ブランチ名>

# ブランチ作成して切り替え
git checkout -b <ブランチ名>
```

### ブランチのマージ・削除
```bash
# ブランチをマージ
git merge <ブランチ名>

# ブランチを削除
git branch -d <ブランチ名>     # 安全な削除
git branch -D <ブランチ名>     # 強制削除
```

## 🔄 変更の取り消し

### ワークツリーの変更を取り消し
```bash
# ファイルの変更を取り消し（ステージング前）
git checkout -- <ファイル名>
git restore <ファイル名>      # 新しいコマンド

# 全ての変更を取り消し
git checkout -- .
git restore .
```

### ステージングを取り消し
```bash
# ステージングを取り消し（ファイルの変更は残す）
git reset HEAD <ファイル名>
git restore --staged <ファイル名>  # 新しいコマンド
```

### コミットの取り消し
```bash
# 直前のコミットを取り消し（変更は残す）
git reset --soft HEAD^

# 直前のコミットを取り消し（変更も取り消し）
git reset --hard HEAD^

# コミットを打ち消すコミットを作成（安全）
git revert <コミットハッシュ>
```

## 🔧 便利なコマンド

### 作業の一時保存
```bash
# 作業内容を一時保存
git stash

# 保存した作業を復元
git stash pop

# 保存した作業の一覧
git stash list
```

### タグ操作
```bash
# タグ作成
git tag <タグ名>
git tag -a <タグ名> -m "メッセージ"

# タグ一覧
git tag

# タグをプッシュ
git push origin <タグ名>
git push origin --tags      # 全てのタグ
```

## ⚠️ 危険なコマンド（注意して使用）

```bash
# 強制プッシュ（使用禁止）
git push --force

# ハードリセット（データ消失の危険）
git reset --hard

# ファイル・ディレクトリ削除
rm -rf
```

## 🆘 トラブルシューティング

### よくあるエラーと対処法

#### 1. プッシュが拒否される
```bash
# リモートが先に進んでいる場合
git pull origin main
# コンフリクトがあれば解決
git push origin main
```

#### 2. コンフリクトの解決
```bash
# コンフリクトしたファイルを確認
git status

# ファイルを編集して解決
# <<<<<<<, =======, >>>>>>> の部分を修正

# 解決後
git add <解決したファイル>
git commit -m "resolve: コンフリクトを解決"
```

#### 3. 間違ったブランチにコミット
```bash
# コミットを取り消し
git reset --soft HEAD^

# 正しいブランチを作成・切り替え
git checkout -b correct-branch

# コミットし直し
git commit -m "正しいメッセージ"
```

## 📚 参考リンク

- [Pro Git Book（日本語）](https://git-scm.com/book/ja/v2)
- [GitHub Docs](https://docs.github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/?locale=ja)

---

**このコマンド集を参考にして、安全にGitを使いこなしましょう！**