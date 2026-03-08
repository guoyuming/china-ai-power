# NOICELAND Blog — Design System & Implementation Guide

> **Purpose**: This document is the single source of truth for AI/LLM/Agent to generate the complete NOICELAND blog website (HTML + CSS + JS). It consolidates design tokens, component specs, page layouts, interaction patterns, and responsive rules. Follow this document **literally** — do not improvise colors, spacing, or typography outside the defined tokens.

---

## 1. Design Tokens

### 1.1 Colors

#### Primitive Palette

| Token                  | Value       | Note           |
| ---------------------- | ----------- | -------------- |
| `--color-black`        | `#000000`   | 纯黑           |
| `--color-white`        | `#FFFFFF`   | 纯白           |
| `--color-gray-900`     | `#111111`   | 深底色（Footer） |
| `--color-gray-800`     | `#222222`   | 正文深灰       |
| `--color-gray-600`     | `#666666`   | 辅助文字       |
| `--color-gray-500`     | `#999999`   | 占位/次要信息   |
| `--color-gray-400`     | `#AAADB0`   | 禁用/Badge 文字 |
| `--color-gray-300`     | `#CCCCCC`   | 输入框默认边框 |
| `--color-gray-200`     | `#E2E2E2`   | 装饰边框       |
| `--color-gray-100`     | `#E6E6E6`   | 分割线/浅底     |
| `--color-blue-500`     | `#0000EE`   | 链接默认蓝     |
| `--color-blue-400`     | `#3898EC`   | 输入聚焦蓝     |
| `--color-white-alpha`  | `rgba(255,255,255,0.1)` | Footer 分割线 |

#### Semantic Mapping

```css
:root {
  /* Text */
  --text-primary:       var(--color-black);      /* 标题、正文 */
  --text-secondary:     var(--color-gray-600);   /* 摘要、日期、图注 */
  --text-body:          var(--color-gray-800);   /* 文章正文 #222 */
  --text-light:         var(--color-white);      /* 深色背景上的文字 */
  --text-placeholder:   var(--color-gray-500);   /* 输入框占位 */
  --text-disabled:      var(--color-gray-400);   /* 禁用态 */

  /* Background */
  --bg-page:            var(--color-white);
  --bg-footer:          var(--color-gray-900);   /* #111111 */
  --bg-input:           var(--color-white);
  --bg-button-primary:  var(--color-black);
  --bg-button-ghost:    transparent;

  /* Border */
  --border-default:     var(--color-gray-300);
  --border-focus:       var(--color-blue-400);
  --border-decorative:  var(--color-gray-200);
  --border-footer:      var(--color-white-alpha);

  /* Link */
  --link-default:       var(--color-blue-500);
  --link-dark:          var(--color-black);
}
```

---

### 1.2 Typography

#### Font Stacks

| Token               | Value                                          | Usage              |
| -------------------- | ---------------------------------------------- | ------------------ |
| `--font-serif`       | `"Playfair Display", "Source Serif Pro", serif` | 大标题、正文段落   |
| `--font-sans`        | `"Inter", "Libre Franklin", "Helvetica Neue", Arial, sans-serif` | 导航、标签、按钮、副标题 |
| `--font-display`     | `"Tenor Sans", sans-serif`                     | 全大写装饰标题（可选） |

> **加载优先级**: `Playfair Display` 400/700, `Inter` 400/600. 通过 Google Fonts `<link>` 引入，`display=swap`.

#### Type Scale

| Token            | Size   | rem      | Line-Height | Weight | Transform | Usage                  |
| ---------------- | ------ | -------- | ----------- | ------ | --------- | ---------------------- |
| `--text-hero`    | 48px   | 3rem     | 1.1         | 700    | none      | Hero 区主标题          |
| `--text-h1`      | 36px   | 2.25rem  | 1.17        | 700    | uppercase | 页面标题 (H1)          |
| `--text-h2`      | 30px   | 1.875rem | 1.2         | 400    | uppercase | 二级标题               |
| `--text-h3`      | 20px   | 1.25rem  | 1.2         | 400    | none      | 卡片标题 (ArticleCard) |
| `--text-h4`      | 14px   | 0.875rem | 1.43        | 700    | none      | 辅助小标题             |
| `--text-body`    | 18px   | 1.125rem | 1.6–1.8     | 400    | none      | 文章正文段落           |
| `--text-body-sm` | 16px   | 1rem     | 1.5         | 400    | none      | 小段落/列表            |
| `--text-ui`      | 14px   | 0.875rem | 1.43        | 400    | none      | 按钮、输入框、导航     |
| `--text-caption` | 12px   | 0.75rem  | 1.5         | 400    | none      | 图注、版权             |
| `--text-meta`    | 11px   | 0.688rem | 1.27        | 400    | uppercase | Author byline          |
| `--text-overline`| 10px   | 0.625rem | 1.2         | 600    | uppercase | 分类标签、小标签       |

#### Font Weight Scale

| Token               | Value | Usage          |
| -------------------- | ----- | -------------- |
| `--weight-regular`   | 400   | 正文/默认      |
| `--weight-semibold`  | 600   | UI 标签/导航链接 |
| `--weight-bold`      | 700   | 标题/引用      |

---

### 1.3 Spacing

**Base unit: 8px** (主系统) + **4px** (微调)

| Token         | Value | Usage                                  |
| ------------- | ----- | -------------------------------------- |
| `--space-1`   | 4px   | 微调                                    |
| `--space-2`   | 8px   | 列表项垂直间距、输入框垂直 padding       |
| `--space-3`   | 12px  | ArticleCard 内部 gap、Avatar-Name gap   |
| `--space-4`   | 16px  | ArticleHeader children gap              |
| `--space-6`   | 24px  | 导航 gap、Grid gap (sm)、段落 margin-bottom、列表 padding-left |
| `--space-8`   | 32px  | Grid gap (default)、InlineImage margin-y |
| `--space-10`  | 40px  | blockquote margin-top                   |
| `--space-12`  | 48px  | 容器左右 padding (desktop)、Hero-to-content margin、ArticleHeader padding-y |
| `--space-16`  | 64px  | 页面标题 margin-top、section 间距         |
| `--space-24`  | 96px  | 大分隔（Hero → Featured 等特大间距）     |

#### Container Dimensions

| Token                        | Value         |
| ----------------------------- | ------------- |
| `--container-max-width`       | `1200px`      |
| `--container-padding-mobile`  | `0 24px`      |
| `--container-padding-desktop` | `0 48px`      |
| `--article-max-width`         | `680px`       |
| `--article-header-max-width`  | `800px`       |

---

### 1.4 Border, Radius & Shadow

```css
:root {
  /* Border */
  --border-width-thin:   1px;
  --border-width-medium: 2px;

  /* Radius */
  --radius-none:   0;
  --radius-sm:     3px;    /* Badge/Tag */
  --radius-circle: 50%;    /* Avatar */
  --radius-pill:   50px;   /* 药丸形按钮 */

  /* Shadow */
  --shadow-none:   none;
  --shadow-card:   0 2px 8px rgba(0, 0, 0, 0.08);  /* 可选: 卡片 hover 浮起 */

  /* Transition */
  --transition-fast:    0.2s ease;
  --transition-default: 0.3s ease;
}
```

---

### 1.5 Breakpoints

| Token          | Min-Width | Max-Width | Label       |
| -------------- | --------- | --------- | ----------- |
| `--bp-desktop` | 992px     | —         | Desktop     |
| `--bp-tablet`  | 768px     | 991px     | Tablet      |
| `--bp-mobile-l`| 480px     | 767px     | Mobile Land |
| `--bp-mobile-p`| 0         | 479px     | Mobile Port |

```css
/* Responsive breakpoints */
@media (max-width: 991px)  { /* Tablet */ }
@media (max-width: 767px)  { /* Mobile Landscape */ }
@media (max-width: 479px)  { /* Mobile Portrait */ }
```

---

## 2. Global Components

### 2.1 `<Header />`

```yaml
Structure:
  tag: <header>
  layout: Flexbox, justify-content: space-between, align-items: center
  height: 80px
  sticky: false
  padding: 0 var(--container-padding)
  max-width: var(--container-max-width)
  margin: 0 auto

Children:
  - Logo:
      tag: <a href="/">
      content: "NOICELAND"
      font: var(--font-sans), bold
      color: var(--text-primary)
      text-decoration: none
      cursor: pointer

  - Navigation:
      tag: <nav>
      layout: Flexbox, gap: 24px
      children:
        - NavItem: <a> text
          items: ["Home", "Latest", "About"]
          font: var(--font-sans), 14px, weight-regular
          color: var(--text-primary)
          text-decoration: none
          hover: opacity 0.7 OR text-decoration underline
          transition: var(--transition-fast)

Responsive:
  tablet: 保持不变
  mobile: Navigation 隐藏，显示 hamburger icon (☰)，点击展开垂直菜单
```

---

### 2.2 `<ArticleCard />`

```yaml
Structure:
  tag: <article> or <a> (整个卡片可点击)
  layout: Flexbox column, gap: 12px
  cursor: pointer

Children:
  - ImageWrapper:
      tag: <div>
      aspect-ratio: 3/2 (默认) or 16/9
      overflow: hidden
      border-radius: 0 (无圆角)
      child:
        - Image:
            tag: <img>
            object-fit: cover
            width: 100%
            height: 100%
            transition: transform 0.3s ease

  - Meta:
      tag: <span>
      font: var(--font-sans), 10px, weight-semibold
      text-transform: uppercase
      letter-spacing: 1px
      color: var(--text-secondary)
      content: "{Category}"

  - Title:
      tag: <h3> or <h4>
      font: var(--font-serif)
      font-size: 20px (default) | 16px (size="small")
      line-height: 1.2
      color: var(--text-primary)
      margin: 0

  - Author:
      tag: <span>
      font: var(--font-sans), 11px
      text-transform: uppercase
      letter-spacing: 0.5px
      color: var(--text-secondary)
      content: "BY {AuthorName}"

Interactions:
  hover:
    - Image: transform scale(1.05), transition 0.3s ease
    - Title: color fades slightly (opacity 0.7)
  
Variants:
  - default: 标准卡片
  - size="small": Title 缩小到 16px，ImageWrapper aspect-ratio 3/2
  - size="large": Title 放大到 24px，ImageWrapper aspect-ratio 16/9
```

---

### 2.3 `<GhostButton />`

```yaml
Structure:
  tag: <button> or <a>
  font: var(--font-sans), 14px, weight-semibold
  text-transform: uppercase
  letter-spacing: 1px
  padding: 12px 32px
  border: 1px solid var(--color-black)
  background: transparent
  color: var(--text-primary)
  cursor: pointer
  transition: all var(--transition-default)

States:
  hover:
    background: var(--color-black)
    color: var(--color-white)
```

---

### 2.4 `<Footer />` (Full Version)

```yaml
Structure:
  tag: <footer>
  background: var(--bg-footer)  /* #111111 */
  color: var(--text-light)      /* #FFFFFF */
  layout: Flex column
  padding: 64px var(--container-padding) 32px

Children:
  - TopRow:
      layout: Flex, justify-content: space-between, align-items: center
      children:
        - Logo: "NOICELAND", font-sans, bold, white
        - Copyright: "© 2026 NOICELAND", font-size: 12px, color: var(--text-secondary)

  - Divider:
      tag: <hr>
      border: none
      border-top: 1px solid rgba(255, 255, 255, 0.1)
      margin: 32px 0

  - BottomRow:
      layout: CSS Grid, grid-template-columns: repeat(5, 1fr), gap: 24px
      children:
        - Column 1–4: Link lists
            each:
              - ColumnTitle: font-sans, 12px, uppercase, weight-semibold, white, margin-bottom: 16px
              - Links: <ul> unstyled
                - <li>: font-sans, 14px, color: rgba(255,255,255,0.6)
                  hover: color white
        - Column 5: Newsletter Form
            children:
              - Label: "Subscribe to our newsletter", font-sans, 14px, white
              - InputGroup (Flex row):
                - <input type="email">:
                    background: white
                    color: var(--text-primary)
                    border: none
                    padding: 12px 16px
                    font-size: 14px
                    flex: 1
                - <button>:
                    background: var(--color-black)
                    color: white
                    padding: 12px 24px
                    border: none
                    font-sans, 14px, weight-semibold
                    cursor: pointer

Responsive:
  tablet: grid-template-columns: repeat(3, 1fr), Column 5 spans full width
  mobile: grid-template-columns: 1fr, 全部堆叠
```

---

### 2.5 `<MinimalFooter />`

```yaml
Structure:
  tag: <footer>
  background: var(--bg-footer)
  color: var(--text-light)
  padding: 24px var(--container-padding)
  layout: Flexbox, justify-content: space-between, align-items: center

Children:
  - Left: "NOICELAND" text logo, font-sans, bold
  - Right: "© 2026 NOICELAND", font-size: 12px
```

---

## 3. Page Specifications

### 3.1 Page 1 — Homepage `/`

```
┌─────────────────────────────────────────────┐
│  <Header />                                 │
├─────────────────────────────────────────────┤
│  <HeroSection>                              │
│  ┌──────────────────┬──────────────────┐    │
│  │    Image (60%)   │  Category        │    │
│  │    object-fit:   │  Title (h1)      │    │
│  │    cover         │  Excerpt         │    │
│  │                  │  Author          │    │
│  └──────────────────┴──────────────────┘    │
├─────────────────────────────────────────────┤
│  <FeaturedGrid>                             │
│  ┌─────┐ ┌─────┐ ┌─────┐                   │
│  │Card │ │Card │ │Card │    Row 1           │
│  └─────┘ └─────┘ └─────┘                   │
│  ┌─────┐ ┌─────┐ ┌─────┐                   │
│  │Card │ │Card │ │Card │    Row 2           │
│  └─────┘ └─────┘ └─────┘                   │
├─────────────────────────────────────────────┤
│  <LatestPostsSection>                       │
│  "LATEST POSTS" (centered, overline style)  │
│  margin-y: 64px                             │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐                   │
│  │ S │ │ S │ │ S │ │ S │  Row 1 (small)    │
│  └───┘ └───┘ └───┘ └───┘                   │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐                   │
│  │ S │ │ S │ │ S │ │ S │  Row 2 (small)    │
│  └───┘ └───┘ └───┘ └───┘                   │
│  [VIEW ALL LATEST POSTS] ← GhostButton     │
│  margin-top: 48px, centered                 │
├─────────────────────────────────────────────┤
│  <BottomGrid>                               │
│  ┌───────────┐ ┌───────────┐                │
│  │  Large     │ │  Large     │               │
│  └───────────┘ └───────────┘                │
│  ┌───────────┐ ┌───────────┐                │
│  │  Large     │ │  Large     │               │
│  └───────────┘ └───────────┘                │
├─────────────────────────────────────────────┤
│  <FullFooter />                             │
└─────────────────────────────────────────────┘
```

#### Section Specs

```yaml
HeroSection:
  layout: CSS Grid, grid-template-columns: 60% 40%
  align-items: center
  min-height: 480px
  children:
    left:
      tag: <div> wrapping <img>
      img: object-fit cover, width 100%, height 100%
    right:
      layout: Flex column, justify-content center
      padding-left: 48px
      children:
        - CategoryLabel: var(--text-overline), font-sans, color secondary
        - MainTitle: <h1>, font-serif, font-size 48px (hero), line-height 1.1, color primary
        - Excerpt: font-sans, 16px, color secondary, margin-top 16px
        - AuthorLabel: font-sans, 11px, uppercase, color secondary, margin-top 24px
  responsive:
    mobile: grid-template-columns 1fr, image on top, right padding-left 0, padding-top 24px

FeaturedGrid:
  layout: CSS Grid
  grid-template-columns: repeat(3, 1fr)
  gap: 32px
  margin-top: 64px
  children: 6 × <ArticleCard />
  responsive:
    tablet: repeat(2, 1fr)
    mobile: 1fr

LatestPostsSection:
  children:
    - SectionTitle:
        content: "LATEST POSTS"
        text-align: center
        font: var(--font-sans), 10px, weight-semibold, uppercase
        letter-spacing: 2px
        color: var(--text-secondary)
        margin: 64px 0
    - Grid:
        layout: CSS Grid, repeat(4, 1fr), gap 24px
        children: 8 × <ArticleCard size="small" />
        responsive:
          tablet: repeat(2, 1fr)
          mobile: 1fr
    - ButtonWrapper:
        layout: Flex center
        margin-top: 48px
        child: <GhostButton>VIEW ALL LATEST POSTS</GhostButton>

BottomGrid:
  layout: CSS Grid, repeat(2, 1fr), gap 32px
  margin-top: 64px
  children: 4 × <ArticleCard size="large" />
  responsive:
    mobile: 1fr
```

---

### 3.2 Page 2 — Latest Posts `/latest`

```
┌─────────────────────────────────────────────┐
│  <Header />                                 │
├─────────────────────────────────────────────┤
│  <PageHeader>                               │
│    margin-top: 64px, margin-bottom: 48px    │
│    <h1> "LATEST POSTS"                      │
│    font-serif, large, uppercase             │
├─────────────────────────────────────────────┤
│  <PostsGrid>                                │
│  CSS Grid: repeat(3, 1fr), gap 32px         │
│  Children: 14 × <ArticleCard />             │
├─────────────────────────────────────────────┤
│  <MinimalFooter />                          │
└─────────────────────────────────────────────┘
```

```yaml
PageHeader:
  tag: <section>
  margin-top: 64px
  margin-bottom: 48px
  children:
    - H1:
        content: "LATEST POSTS"
        font: var(--font-serif), 36px, weight-bold
        text-transform: uppercase
        color: var(--text-primary)

PostsGrid:
  layout: CSS Grid, repeat(3, 1fr), gap 32px
  children: 14 × <ArticleCard /> (dynamic mapping from data)
  responsive:
    tablet: repeat(2, 1fr)
    mobile: 1fr
```

---

### 3.3 Page 3 — Article Detail `/article/:slug`

```
┌─────────────────────────────────────────────┐
│  <Header />                                 │
├─────────────────────────────────────────────┤
│  <ArticleHeader>    max-width: 800px        │
│    CategoryLabel                            │
│    Title (h1, massive)                      │
│    AuthorRow: [Avatar] [Name]               │
│    padding-y: 48px                          │
├─────────────────────────────────────────────┤
│  <HeroImage>        max-width: 100%         │
│    <img width="100%" object-fit="cover" />  │
│    margin-bottom: 48px                      │
├─────────────────────────────────────────────┤
│  <ArticleContent>   max-width: 680px        │
│    font-serif, 18px, line-height 1.6–1.8    │
│    color: #222222                           │
│    <p>: margin-bottom 24px                  │
│    <ul>: padding-left 24px, disc            │
│    <li>: margin-bottom 8px                  │
│    <img>: width 100%, margin-y 32px         │
├─────────────────────────────────────────────┤
│  <MinimalFooter />                          │
└─────────────────────────────────────────────┘
```

```yaml
ArticleHeader:
  max-width: 800px
  margin: 0 auto
  padding: 48px 0
  layout: Flex column, gap 16px
  children:
    - CategoryLabel:
        font: var(--font-sans), 10px, weight-semibold, uppercase
        letter-spacing: 1px
        color: var(--text-secondary)
    - Title:
        tag: <h1>
        font: var(--font-serif), 48px, weight-bold
        line-height: 1.1
        color: var(--text-primary)
    - AuthorRow:
        layout: Flex row, align-items center, gap 12px
        children:
          - Avatar:
              tag: <img>
              width: 40px, height: 40px
              border-radius: 50%
              object-fit: cover
          - AuthorName:
              font: var(--font-sans), 11px, weight-bold, uppercase
              color: var(--text-secondary)

HeroImage:
  max-width: 100% (or equal to global container max-width)
  margin: 0 auto 48px
  child:
    <img>: width 100%, object-fit cover

ArticleContent:
  max-width: 680px
  margin: 0 auto
  font: var(--font-serif), 18px, weight-regular
  line-height: 1.6 to 1.8
  color: var(--color-gray-800)  /* #222222 */
  
  elements:
    p:
      margin-bottom: 24px
    ul:
      padding-left: 24px
      margin-bottom: 24px
      list-style-type: disc
    li:
      margin-bottom: 8px
    img (inline):
      width: 100%
      margin: 32px 0
    blockquote:
      font: var(--font-serif), 24px, weight-bold
      line-height: 1.5
      border-top: 2px solid var(--color-gray-800)
      padding-top: 30px
      margin: 40px 0 30px
```

---

## 4. Interaction & Animation Patterns

### 4.1 Hover Effects

| Element        | Property      | From                   | To                   | Transition       |
| -------------- | ------------- | ---------------------- | -------------------- | ---------------- |
| ArticleCard Image | transform  | `scale(1)`             | `scale(1.05)`        | `0.3s ease`      |
| ArticleCard Title | color      | `var(--text-primary)`  | `opacity: 0.7`       | `0.2s ease`      |
| NavItem        | opacity / underline | `1` / none       | `0.7` / underline    | `0.2s ease`      |
| GhostButton    | background   | `transparent`          | `var(--color-black)` | `0.3s ease`      |
| GhostButton    | color        | `var(--text-primary)`  | `var(--color-white)` | `0.3s ease`      |
| Footer Link    | color        | `rgba(255,255,255,0.6)`| `white`              | `0.2s ease`      |

### 4.2 Focus States

```css
input:focus {
  border-color: var(--border-focus);  /* #3898EC */
  outline: none;
}

a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}
```

### 4.3 Scroll & Load

- **No sticky header** — Header 随页面滚动
- **Image lazy loading**: 所有 `<img>` 添加 `loading="lazy"`
- **Smooth anchor scroll**: `html { scroll-behavior: smooth; }`

---

## 5. Responsive Adaptation Rules

### 5.1 Grid Columns Mapping

| Section         | Desktop (≥992px) | Tablet (768–991px) | Mobile (≤767px) |
| --------------- | ---------------- | ------------------- | --------------- |
| HeroSection     | 60% / 40%        | 1fr (stack)         | 1fr (stack)     |
| FeaturedGrid    | 3 columns        | 2 columns           | 1 column        |
| LatestPosts     | 4 columns        | 2 columns           | 1 column        |
| BottomGrid      | 2 columns        | 2 columns           | 1 column        |
| PostsGrid       | 3 columns        | 2 columns           | 1 column        |
| Footer BottomRow| 5 columns        | 3 columns           | 1 column        |

### 5.2 Typography Scaling

| Element        | Desktop | Mobile   |
| -------------- | ------- | -------- |
| Hero Title     | 48px    | 32px     |
| H1             | 36px    | 28px     |
| H2             | 30px    | 24px     |
| Body           | 18px    | 16px     |
| ArticleCard Title | 20px | 18px   |

### 5.3 Spacing Scaling

```css
@media (max-width: 767px) {
  :root {
    --container-padding: 0 24px;  /* 从 48px 缩小到 24px */
  }
  .hero-section { min-height: auto; }
  .section-title { margin: 40px 0; }  /* 从 64px 缩小 */
}
```

---

## 6. Input & Form Patterns

### 6.1 Email Input (Newsletter)

```yaml
Default:
  background: var(--color-white)
  color: var(--text-primary)
  border: 1px solid var(--border-default)
  padding: 12px 16px
  font: var(--font-sans), 14px
  border-radius: 0

Focus:
  border-color: var(--border-focus)
  outline: none

Placeholder:
  color: var(--text-placeholder)
```

### 6.2 Newsletter Submit Button

```yaml
background: var(--color-black)
color: var(--color-white)
border: none
padding: 12px 24px
font: var(--font-sans), 14px, weight-semibold
cursor: pointer
hover:
  opacity: 0.85
```

---

## 7. CSS Reset & Global Styles

```css
/* 必须在所有样式之前引入 */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-primary);
  background-color: var(--bg-page);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--container-padding-desktop);
}

@media (max-width: 767px) {
  .container {
    padding: var(--container-padding-mobile);
  }
}
```

---

## 8. Technology & External Dependencies

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
```

### Component Framework Note

原始设计系统引用了 **PrimeReact / PrimeVue / PrimeNG**（26 个组件），如项目使用 React/Vue 框架，可考虑集成 Prime 组件库来加速 form、table 等 UI 元素的开发。纯 HTML+CSS 实现无需引入。

---

## 9. AI Implementation Checklist

When generating code, verify each item:

- [ ] All colors use CSS custom properties (`var(--...)`)，不出现硬编码 hex
- [ ] Typography: serif for headings & body text, sans-serif for UI/nav/meta
- [ ] All `<img>` have `loading="lazy"`, `alt` text, `object-fit: cover`
- [ ] ArticleCard hover: image scale + title opacity fade
- [ ] GhostButton hover: bg black, text white transition
- [ ] Container max-width 1200px, centered
- [ ] Article content max-width 680px, centered
- [ ] Responsive: Grid columns collapse per Section 5.1 table
- [ ] Footer: dark bg #111, white text, 5-col grid → stack on mobile
- [ ] No border-radius on cards (editorial/magazine aesthetic)
- [ ] All uppercase text uses `text-transform: uppercase` + `letter-spacing`
- [ ] Focus states visible for keyboard accessibility
- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
