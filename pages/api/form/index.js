import dbConnect from "../../lib/connectDB";
import Form from "../../models/formModel";

dbConnect();

export default async (req, res) => {
  const { method } = req;

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
};
