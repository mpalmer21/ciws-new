
const mongoose = require('mongoose');
const Part = require ('../models/partModel.js')


 const addNewPart = async (req, res) => {
    const {uiqueId,
        stampCasting,
        blast,
        seatsRemoved,
        pt10Bar,
        TestMPI,
        VGuides,
        Componentsremoved,
        waterPlatesSupplied,
        injectorSleeveFitted,
        combustionFace,
        sampleTaken,
        materialSpecification,
        specialMaterialInstructions,
        otherCastingMarks,
        additionalNotes,
        inspectionResults,
        FIR1,
        FIR1Comments,
        FIR2,
        FIR2Comments,
        FIR3,
        FIR3Comments,
        FIR4,
        FIR4Comments,
        FIR5,
        FIR5Comments,
        FIR6,
        FIR6Comments,
        FIR7,
        FIR7Comments,
        FIR8,
        FIR8Comments,
        FIR9,
        FIR9Comments,
        FIR10,
        FIR10Comments,
        FIR11,
        FIR11Comments,
        FIR12,
        FIR12Comments, } = req.body;
    const  newPart = new Part({ 
        uiqueId,
        stampCasting,
        blast,
        seatsRemoved,
        pt10Bar,
        TestMPI,
        VGuides,
        Componentsremoved,
        waterPlatesSupplied,
        injectorSleeveFitted,
        combustionFace,
        sampleTaken,
        materialSpecification,
        specialMaterialInstructions,
        otherCastingMarks,
        additionalNotes,
        inspectionResults,
        FIR1,
        FIR1Comments,
        FIR2,
        FIR2Comments,
        FIR3,
        FIR3Comments,
        FIR4,
        FIR4Comments,
        FIR5,
        FIR5Comments,
        FIR6,
        FIR6Comments,
        FIR7,
        FIR7Comments,
        FIR8,
        FIR8Comments,
        FIR9,
        FIR9Comments,
        FIR10,
        FIR10Comments,
        FIR11,
        FIR11Comments,
        FIR12,
        FIR12Comments,
    })



    try {
        await newPart.save();

        res.status(201).json(newPart );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 const getParts =  async (req, res) => {
    try {
        const part = await Part.find()

        res.status(200).json(part);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

 const getPart = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    try {
        const part = await Part.findById({_id: id})
        
        res.status(200).json(part);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const UpdatePart = async (req, res) => {
    const { id } = req.params;
    const { worksOrder,headType,customerName,customerSupply,purchaseOrderNumber} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPart = { worksOrder,headType,customerName,customerSupply,purchaseOrderNumber, _id: id };

    await Part.findByIdAndUpdate(id, updatedPart, { new: true });

    res.json(updatedPart);
}


 const deletePart = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Part.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
    module.exports = {
        addNewPart,
        getParts,
        getPart,
        UpdatePart,
        deletePart,
      }
      

