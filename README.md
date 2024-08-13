# react-ts-todo

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

# Reactの画面が表示される
http://localhost:3000/
```

### MUIのインストール
```php

```
