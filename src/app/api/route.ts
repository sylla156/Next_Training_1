import { z } from "zod";
import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   host: process.env.BREVO_HOST,
//   port: Number(process.env.BREVO_PORT),
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: process.env.BREVO_USER,
//     pass: process.env.BREVO_PASS,
//   },
// });

export async function POST(request: Request) {
  const body = await request.json();
  const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    url: z.string().url(),
    desc: z.string().optional(),
  });

  console.log(body,{
    host: process.env.BREVO_HOST,
    port: Number(process.env.BREVO_PORT),
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  })
   return Response.json({
      status: true,
      content: "Nice to meet you",
    })

  // if (formSchema.parse(body)) {
  //   const info = await transporter.sendMail({
  //     from: `Portfolio User <${process.env.BREVO_SENDER}>`, // sender address
  //     to: process.env.BREVO_RECEIVER, // list of receivers
  //     subject: "Portfolio Email (Opportunites)", // Subject line
  //     text: "Hello better", // mlain text body
  //     html: `<div>
  //     <h2> name: ${body.name} </h2> <br/>
  //     <h2> email: ${body.name}</h2> <br/>
  //     <h2> url: ${body.url} </h2> <br/>
  //     <h2> desc:</h2> <p>${body.desc}</p><br/>
  //     </div>`, // html body
  //   });

  //   return Response.json({
  //     status: true,
  //     content: "Nice to meet you",
  //   });
  // }

  // return Response.json(
  //   {
  //     status: false,
  //     content: "It seems like this shit don't work",
  //   },
  //   { status: 404 }
  // );
}


