# Cypress Install

### init project 
```
  npm i init
```

### install cypress
```
npm install cypress --save -dev
```

### 安裝完cypress後直接開啟cypress並進行相關設定
```
npx cypress open
```

## run cypress 相關操作

### 自動運行測試腳本(在terminal中，無UI畫面)
```
npx cypress run
```

### 跟上述結果一樣，差別在於跑腳本過程會有UI畫面可以觀測
```
npx cypress run --headed
```

### 可指定要run哪一個腳本
```
npx cypress run --spec cypress\e2e\MyTest.cy.js
```

### 指定要用哪個瀏覽器運行(預設為cypress內建的electron)
```
npx cypress run --browser chrome
```