<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/800be691-90ab-4392-bcda-5910eab6307d

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy na Vercel

- Pré-requisitos: ter o repositório no GitHub (ou GitLab/Bitbucket) ou instalar o Vercel CLI.
- Este projeto usa Vite; o comando de build é `npm run build` e a pasta de saída é `dist`.
- Já foi adicionada a configuração `vercel.json` para servir a pasta `dist` e habilitar fallback para SPA.

Instruções rápidas:

1. Commit e push no GitHub:

```bash
git add .
git commit -m "Prepare project for Vercel"
git push origin main
```

2. No painel da Vercel, clique em "New Project" → importe o repositório → confirme o `Build Command` como `npm run build` e `Output Directory` como `dist` (essas opções já vêm configuradas pelo `vercel.json`).

Opcional — usando a CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Após o deploy, a Vercel vai executar `npm run build` automaticamente e publicar a pasta `dist`.

