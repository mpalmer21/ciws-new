import dbConnect from "../../lib/connectDB";
import Part from "../../models/partModel";

dbConnect();

// export default async (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const forms = await Part.find({});

//         res.status(200).json({ success: true, data: forms });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "POST":
//       try {
//         const form = await Part.create(req.body);

//         res.status(201).json({ success: true, data: form });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };
