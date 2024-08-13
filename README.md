## 概要
* React & TypeScriptを使用したTodoアプリの作成


## 環境構築手順
### Reactプロジェクト作成
```php
# コンテナイメージの作成
docker-compose build

# ReactとTypeScriptのプロジェクトを作成する
# 「todo」：docker-compose.ymlファイルに記載のサービス名
# 「todo-project」：Reactのプロジェクト名
docker-compose run --rm todo sh -c 'npx create-react-app todo-project --template typescript'

# 作成したプロジェクトを起動する
docker-compose up -d

# Reactの画面が表示される（起動後、表示されるまで1~2分程度）
http://localhost:3000/
```

### MUIのインストール
```php
docker exec -it react-ts-todo-todo-1 bash
cd todo-project
npm install @mui/material @mui/icons-material
npm install @emotion/react @emotion/styled
exit
```

### Todoアプリ用のコンポーネント作成
コンポーネントの作成が完了すると、自動的に画面が更新される（ホットリロード）
```php
# ルートディレクトリに移動してからcpコマンドでコンポーネントを作成する
cp ./copy_todo/App.tsx ./todo-project/src/App.tsx
cp -r ./copy_todo/components ./todo-project/src/
```

### エラーが起きた時に試してください
```php
cd todo-project
npm install @emotion/react @emotion/styled
rm -rf node_modules
npm install
```
