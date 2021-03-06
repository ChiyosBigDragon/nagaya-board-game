This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## メモ
`yarn dev` する前に `docker-compose up -d` する．
- `server/.env`
- `server/prisma/.env`
を埋める．`API_DATABASE_URL` と `SHADOW_DATABASE_URL` は違うものを使い，あらかじめ建てておく．(https://www.prisma.io/docs/concepts/components/prisma-migrate#cloud-hosted-shadow-databases)

フロント (Next.js) で環境変数を使うときは prefix に `NEXT_PUBLIC_` をつける．型定義は `global.d.ts` にでも書く．