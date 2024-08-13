import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_HOST,
  port: Number(process.env.BREVO_PORT),
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
});

export async function POST(request: Request) {
  const body = await request.json();
  const formSchema = z.object({
    rate: z.number(),
  });

  if (formSchema.parse(body)) {
    try {
      const info = await transporter.sendMail({
        from: `Portfolio User <${process.env.BREVO_SENDER}>`, // sender address
        to: process.env.BREVO_RECEIVER, // list of receivers
        subject: "Portfolio Email (rate)", // Subject line
        text: "Hello better", // mlain text body
        html: `<h2> Number: ${body.rate} </h2>`,
      });
    } catch (error) {
      return Response.json(
        {
          status: false,
          content: "It seems like this shit don't work",
        },
        { status: 404 }
      );
    }

    return Response.json({
      status: true,
      content: "Nice to meet you",
    });
  }

  return Response.json(
    {
      status: false,
      content: "It seems like this shit don't work",
    },
    { status: 404 }
  );
}

export async function GET(request: Request) {
  return Response.json({ body: `${process.env.RECEIVER}` });
}
