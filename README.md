## 寫作規範

- 引用套件
- CSS
  - 共通 CSS
    - 引用
    - 自定變數
    - 共通預設值
  - 重複區塊模組化
- 變數命名
  - CSS
  - javascript
- Git Commit

<br>
<br>

## 引用套件

寫在 `HEADER`
```html
<!-- Normalize -->
<link rel="stylesheet" href="css/normalize.css">
```

<br>
<br>

## CSS

### 共通 CSS

```css
/* Noto Sans - Regular 400 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

/* defined */
:root {
  /* color */
  --c-primary: #223843; /* Gunmetal */
  --c-secondary: #FCF9EE; /* Floral White */
  --c-cultured: #EFF1F3; /* Cultured */
  --c-lightgray: #C4C4C4; /* Light Gray */
  --c-champagne: #FFD289; /* Deep Champagne */
  --c-berry: #C16E70; /* Fuzzy Wuzzy */
  --c-warning: ;

  /* font */
  --f-fam-name: ; /* anything diffrent from default */
  --f-siz-title: ; /* specific item appear in the whole project */
  --f-siz-s: ;
  --f-siz-m: ;

  /* border-radius */
  --b-btn: 30px;
  --b-s: 5px;
  --b-m: 10px;

  /* shadow */
}

/* default */
* {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans', sans-serif;
}

p, ul, li, article, figure {
  margin: 0;
  padding: 0;
}

a,
a:link {
  text-decoration: none;
  color: #000; /* replace with primary-color */
}
```

<br>

### 模組化
#### 模組化目的：
- 減少重工
- 方便維護
- 網站一致性

#### 預計模組化對象：  
- 整個區塊
  - Header
  - Footer
- 共用 class name
  - icon
  - button
  - a link
  - 我的最愛按鈕
  - 官方| 人氣| 課程 的 landing page
  - 首頁| 官方| 人氣 的 橢圓形商品相關設定
  - 首頁| 單一課程 的 指向其他頁面的方格圖片
  - 下拉式選單 (不確定必要性和可行性)

<br>
<br>

## 變數命名

### **`CSS`**

#### 採用 BEM 命名法  

BEM 是 Yandex 團隊提出的 CSS 命名法，注重程式碼的可閱讀性和命名的一致性。這套命名法讓每個 class name 的作用對象變得明確，依照他提供的規則去命名可以讓命名變得簡單並減少可能因重複命名產生的問題。

<br>

#### BEM 將 class name 分為三個元素

- Block 區塊
- Element 元素
- Modifier 修飾符

`Block`： 代表每個區塊最上層的元素。  
`Element`： 代表 Block 底下的子元素。  
`Modifier`： 用來表示作用對象的狀態，如 `active`、 `selected` 等。

<br>

#### BEM 用三種符號作為連結以表示上述元素的關係

`__` 雙底線： 用來連接區塊與子元素。  
`--` 雙中線： 用來表示作用對象的狀態。  
`-` 中線： 用來連接由多個單詞組成的名字。

討論以上課示範的`.`串接方式把 `modifier` 獨立出來避免取名過長。

<br>


#### 範例

1. 以專題的 header 為例

```html
<header>
  <style>
    .header__icons__item {}
    .header__icons__item.active {}
  </style>
</header>
<body>
  <header class="header">
    <img class="header__logo" src="">
    <ul class="header__nav">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="header__icons">
      <li class="header__icons__item active"><img src=""></li>
      <li class="header__icons__item"><img src=""></li>
      <li class="header__icons__item"><img src=""></li>
    </ul>
  </header>
</body>
```

<br>

2. 以首頁的人氣熱銷區塊示範巢狀結構應對

```html
<body>
  <section class="popular">
    <h3 class="popular__title"></h3>
    <div class="popular__items">
      <div class="popular__item">
        <div class="popular__rank"></div>
        <div class="popular__card">
          <figure class="popular__img-top">
            <img class="popular__img" src="">
          </figure>
          <p class="popular__name"></p>
          <p class="popular__price"></p>
        </div>
      </div>
    </div>
    <a class="popular__btn" role="button"></a>
  </section>
</body>
```

BEM 只規範每個區塊的上層標籤必須獨立。假如子標籤的巢狀結構沒有直接的上下關係可直接以最上層的標籤命名作為識別。



建議閱讀：&nbsp;&nbsp;&nbsp;[BEM，CSS設計模式](https://chupainotebook.blogspot.com/2019/05/bemcss.html)

### 待補...
