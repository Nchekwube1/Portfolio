import { NextApiRequest, NextApiResponse } from "next";
import NodeMailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const PASSWORD = process.env.PASSWORD;
const FormHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = NodeMailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "unekwesburner@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: `${req.body.email}`,
    to: "unekwesburner@gmail.com",
    subject: `Message From ${req.body.email}`,
    text: `
    Hello Francis, my name is ${req.body.name} i would love for you to design a ${req.body.projectType},
    my budget is ${req.body.budget}. dditional information is ${req.body.additional}
    `,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      res.status(200).send(err);
      return
    } else if (info) {
      res.status(500).send(info);
    }
  });
  res.status(200).send('Email sent successfully!');
};

export default FormHandler;
