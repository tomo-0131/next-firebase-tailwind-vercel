## Talexy
Talexyは小さな目標から大きな目標まで、カジュアルに投稿することができるアプリです。

現代では、自己肯定感が低い方が多いというニュースを見たことが制作のきっかけとなりました。

小さな目標の達成を積み重ねることで、自己肯定感を高めて欲しい、そして私自身も利用したいと思い、制作に着手しました。

https://next-firebase-recoil-tailwind-vercel-tomo-0131.vercel.app/

![スクリーンショット 2022-01-15 0 15 18](https://user-images.githubusercontent.com/63157348/149538950-53201441-f60b-48e8-aea1-edcaa2e40c0b.png)


<img width="1356" alt="スクリーンショット 2022-01-23 20 03 02" src="https://user-images.githubusercontent.com/63157348/150809080-3f9a084a-7bf5-45af-b3a5-688576d68008.png">




いいな！と思った投稿にはいいねを付けて交流することができます。

## 使用技術
Next.js(React.js) / React Hooks / Jest / React Testing Library /
SWR / JavaScript / TypeScript / Recoil / Tailwind CSS /
Firebase v9 / Vercel

- ユーザー管理はFirebase Authentication
- データ管理はFirebase Firestore
- テストはJest, React Testing Library
- 状態管理はReact Hook, SWR, Recoil
- CSSはTailwind CSS
- モーダル開閉など、Recoilを導入
- SWRを利用したNext内部apiサーバーからのfetch機能(News API利用)
- Vercelにデプロイ

## 今後の追加予定機能等
- ~~コメント機能~~→1/13対応済み
- ゲストユーザーログイン機能を実装しました(Firebase Auth)
- 画像投稿機能
- TypeScript本格対応中

## 課題
- コードに統一性を持たせる
- Recoilの役割を増やして、state管理をシンプルにしたい
- ~~SWRを導入して、APIからfetchし、表示する機能を行うページ(News等) を実装したい~~ 
  → 実装着手中
