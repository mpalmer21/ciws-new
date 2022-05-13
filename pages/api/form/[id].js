import dbConnect from "../../../lib/connectDB";
import Form from "../../../models/formModel";
import { getSession } from "next-auth/react";

dbConnect();

export default async (req, res) => {
  const session = await getSession({ req });
  const {
    query: { id },
    method,
  } = req;
  if (session) {
    switch (method) {
      case "GET":
        try {
          const forms = await Form.findById(id);

          if (!forms) {
            return res.status(400).json({ success: false });
          }

          res.status(200).json({ success: true, data: forms });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case "PUT":
        try {
          const form = await Form.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          });

          if (!form) {
            return res.status(400).json({ success: false });
          }

          res.status(200).json({ success: true, data: form });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case "DELETE":
        try {
          const deletedForm = await Form.deleteOne({ _id: id });

          if (!deletedForm) {
            return res.status(400).json({ success: false });
          }

          res.status(200).json({ success: true, data: {} });
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
