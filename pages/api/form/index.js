import dbConnect from "../../../lib/connectDB";
import Form from "../../../models/formModel";
import { getSession } from "next-auth/react";

dbConnect();

export default async (req, res) => {
  const session = await getSession({ req });
  const { method } = req;
  if (session) {
    switch (method) {
      case "GET":
        try {
          const forms = await Form.find({});

          res.status(200).json({ success: true, data: forms });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case "POST":
        try {
          const form = await Form.create(req.body);

          res.status(201).json({ success: true, data: form });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
