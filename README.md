# GitHub練習用リポジトリ (Training Sandbox)

**エス・エー・エス株式会社**  
*新規参画者向けGitHub操作練習用リポジトリ*

## 📌 このリポジトリについて

このリポジトリは、新しく参画されるメンバーがGitHubの基本操作を安全に練習するためのサンドボックス環境です。

## 🎯 練習の目的

- Git基本コマンドの習得
- ブランチ作成・切り替えの練習
- コミット・プッシュの練習
- プルリクエスト（PR）の作成練習
- コンフリクト解決の練習

## 📁 ディレクトリ構成

```
training-sandbox/
├── README.md                    # このファイル
├── members/                     # メンバー紹介ディレクトリ
│   └── template.md             # 自己紹介テンプレート
├── practice-files/              # 練習用ファイル
│   ├── hello-world.txt         # 基本練習用
│   └── sample-code.js          # コード練習用
└── docs/                        # ドキュメント
    └── git-commands.md         # Git基本コマンド集
```

## 🚀 練習手順

### 1. リポジトリをクローン

```bash
# WSL2/ターミナルで実行
cd ~/projects
git clone git@github.com:sas-com/training-sandbox.git
cd training-sandbox
```

### 2. 自分用ブランチを作成

```bash
# ブランチ名は training/[名前] の形式で
git checkout -b training/yamada-taro
```

### 3. 自己紹介ファイルを作成

```bash
# テンプレートをコピー
cp members/template.md members/yamada-taro.md

# ファイルを編集
code members/yamada-taro.md
```

### 4. コミット・プッシュ

```bash
# 変更をステージング
git add members/yamada-taro.md

# コミット
git commit -m "add: 山田太郎の自己紹介を追加"

# プッシュ
git push origin training/yamada-taro
```

### 5. プルリクエスト作成

- GitHubでリポジトリを開く
- 「Compare & pull request」をクリック
- タイトル: `add: [名前]の自己紹介`
- 説明を記入してPRを作成

## 📋 練習課題

### レベル1: 基本操作
- [ ] リポジトリのクローン
- [ ] ブランチの作成
- [ ] ファイルの作成・編集
- [ ] コミット・プッシュ
- [ ] PRの作成

### レベル2: ブランチ操作
- [ ] 複数ブランチの作成
- [ ] ブランチ間の切り替え
- [ ] ブランチのマージ
- [ ] ブランチの削除

### レベル3: チーム開発シミュレーション
- [ ] 他のメンバーのPRにコメント
- [ ] コンフリクトの発生・解決
- [ ] レビュー指摘への対応

## 🔄 コミットメッセージ規約

このリポジトリでも本番同様のコミットメッセージ規約を適用します：

```
<type>(<scope>): <subject>

例：
add: 自己紹介ファイルを追加
fix: タイポを修正
docs: READMEを更新
```

## ⚠️ 注意事項

- **このリポジトリは練習用です** - 本番データは含めないでください
- **自由に実験してください** - 失敗を恐れずに様々な操作を試してください
- **強制プッシュは禁止** - `git push --force` は使用しないでください
- **機密情報の投稿禁止** - パスワードやAPIキーは投稿しないでください

## 🆘 困ったときは

### よくあるトラブル
- [Git基本コマンド](docs/git-commands.md)を参照
- [ONBOARDING.md](../ONBOARDING.md)のトラブルシューティングを確認

### サポート窓口
- **技術的な質問**: SAS Github管理チーム (github@sas-com.com)
- **アクセス権限**: SAS Github管理チーム (github@sas-com.com)

## 🎉 練習完了の目安

以下ができるようになったら練習完了です：

- [ ] 独立してリポジトリをクローンできる
- [ ] ブランチを作成・切り替えできる
- [ ] 意味のあるコミットメッセージでコミットできる
- [ ] PRを作成してレビューを受けることができる
- [ ] 簡単なコンフリクトを解決できる

---

**練習頑張ってください！分からないことがあれば遠慮なく質問してください。**

---

**© 2025 エス・エー・エス株式会社 - GitHub練習用リポジトリ**