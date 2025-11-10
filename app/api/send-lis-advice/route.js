import nodemailer from 'nodemailer';

function transporter(){
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

export async function POST(req){
  const advice = await req.json();
  const subject = `Nieuw LiS-advies – ${advice?.name || 'Onbekend'}`;
  const text = advice?.advicePlain || JSON.stringify(advice, null, 2);
  try {
    await transporter().sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO_ROB || 'rob@creja.nl',
      subject, text,
      html: `<pre style="font-family:ui-monospace">${text.replace(/</g,'&lt;')}</pre>`,
    });
    return Response.json({ ok:true });
  } catch (e){
    console.error(e);
    return Response.json({ ok:false, error: e?.message || 'send error' }, { status: 500 });
  }
}
