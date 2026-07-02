import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const callbackSchema = z.object({
  name: z.string().min(1, "Укажите имя"),
  phone: z.string().min(1, "Укажите телефон"),
  comment: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const parsed = callbackSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Некорректные данные", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, phone, comment } = parsed.data;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.SMTP_TO || "Pk-teplogaz@yandex.ru";

  if (!host || !user || !pass) {
    return NextResponse.json({ error: "Почта не настроена" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const body = [`Имя: ${name}`, `Телефон: ${phone}`, `Комментарий: ${comment}`];

  try {
    await transporter.sendMail({
      from: user,
      to,
      subject: "Заказ звонка с сайта",
      text: body.join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ошибка при отправке письма" },
      { status: 500 }
    );
  }
}
