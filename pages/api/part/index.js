import dbConnect from "../../../lib/connectDB";
import Part from "../../../models/partModel";
import { getSession } from "next-auth/react";

dbConnect();

export default async (req, res) => {
  const session = await getSession({ req });
  const { method } = req;

  if (session) {
    switch (method) {
      case "GET":
        try {
          const part = await Part.find();

          res.status(200).json(part);
        } catch (error) {
          res.status(404).json({ message: error.message });
        }
        break;
      case "POST":
        try {
          const parts = await Part.create(req.body);

          res.status(201).json({ parts });
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
