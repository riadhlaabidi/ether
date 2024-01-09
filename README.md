This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install project's dependencies: 

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Test Read Contract

In order to test this app feature, you need to have MetaMask installed as an extension in your browser, you can find the link to install by clicking on the `Connect` button.
 
After successfully connecting and redirected to your dashboard, you'll see your address in the top badge, then below is your balance.

The next form is where you can input an ERC-20 Contract address an look for its information.

# Test Send Transaction 

In order to send tokens from your account, click on `Send` in the top right corner, input the recipient address, and the amount you want to send and click `Send`

You need to confirm the transaction from the MetaMask popup. If you don't have enough balance, you will not be able to confirm.

Finally, you can disconnect you wallet from the `Disconnect` button.
