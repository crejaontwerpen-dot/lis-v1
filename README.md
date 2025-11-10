# LiS Keuzetool – Next.js (Vercel-ready)

## Snel starten lokaal
```bash
npm install
npm run dev
# open http://localhost:3000
```

## E-mail (SMTP) variabelen
Maak `.env.local` met:
```
SMTP_HOST=smtp.jouwprovider.nl
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey_of_account
SMTP_PASS=geheim_wachtwoord
MAIL_FROM=LiS Keuzetool <no-reply@lis.nl>
MAIL_TO_ROB=rob@creja.nl
```
Zet dezelfde variabelen in Vercel (Project → Settings → Environment Variables).

## Deploy naar Vercel
- Push naar GitHub
- Vercel → Add New Project → Import repo → Deploy
