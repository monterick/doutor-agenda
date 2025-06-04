This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server and create .env:



```bash
npx drizzle-kit push
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Env Variables.

DATABASE_URL="postgresql://...." #Seu banco de dados

BETTER_AUTH_SECRET="" Escolha um código

BETTER_AUTH_URL=http://localhost:3000 #Trocar para o seu host


#Auth para registrar ou logar com o Google,

GOOGLE_CLIENT_ID="" 
GOOGLE_CLIENT_SECRET=""

NEXT_PUBLIC_APP_URL="http://localhost:3000" #Trocar para o seu host

#Stripe

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="" chave publicável Stripe

STRIPE_PRODUCT_ID="" Código do seu produto na Stripe

STRIPE_PUBLIC_ESSENTIAL_PLAN_PRICE_ID="" Código do seu plano na strip

STRIPE_WEBHOOK_SECRET="" #Webhook stripe

Funcionalidades.

1. ✅ Título: Doutor Agenda.  
2. ✅ Sistema para agendamentos de consultas com dashboard para acompanhar estatísticas.  
3. ✅ Tecnologias usadas: NextJs, ORM drizzle, better auth e autenticação com o google.  
4. ✅ Link do deploy: https://doutor-agenda-ywd4.vercel.app/

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
