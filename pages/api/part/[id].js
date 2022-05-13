import dbConnect from "../../../lib/connectDB";
import { getSession } from "next-auth/react";
import Part from "../../../models/partModel";

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
          const part = await Part.findById(id);

          if (!part) {
            return res.status(400).json({ success: false });
          }

          res.status(200).json({ part });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case "PUT":
        try {
          const part = await Part.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          });

          if (!part) {
            return res.status(400).json({ success: false });
          }

          res.status(200).json({ part });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case "DELETE":
        try {
          const deletedPart = await Part.deleteOne({ _id: id });

          if (!deletedPart) {
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
