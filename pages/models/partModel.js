const mongoose = require("mongoose");

const PartSchema = new mongoose.Schema(
  {
    uiqueId: {
      type: String,
    },
    stampCasting: {
      type: String,
    },
    blast: {
      type: String,
    },
    seatsRemoved: {
      type: String,
    },
    pt10Bar: {
      type: String,
    },
    TestMPI: {
      type: String,
    },
    VGuides: {
      type: String,
    },
    Componentsremoved: {
      type: String,
    },
    waterPlatesSupplied: {
      type: String,
    },
    injectorSleeveFitted: {
      type: String,
    },
    combustionFace: {
      type: String,
    },
    sampleTaken: {
      type: String,
    },
    materialSpecification: {
      type: String,
    },
    specialMaterialInstructions: {
      type: String,
    },
    otherCastingMarks: {
      type: String,
    },
    additionalNotes: {
      type: String,
    },
    inspectionResults: {
      type: String,
    },
    FIR1: {
      type: String,
    },
    FIR1Comments: {
      type: String,
    },
    FIR2: {
      type: String,
    },
    FIR2Comments: {
      type: String,
    },
    FIR3: {
      type: String,
    },
    FIR3Comments: {
      type: String,
    },
    FIR4: {
      type: String,
    },
    FIR4Comments: {
      type: String,
    },
    FIR5: {
      type: String,
    },
    FIR5Comments: {
      type: String,
    },
    FIR6: {
      type: String,
    },
    FIR6Comments: {
      type: String,
    },
    FIR7: {
      type: String,
    },
    FIR7Comments: {
      type: String,
    },
    FIR8: {
      type: String,
    },
    FIR8Comments: {
      type: String,
    },
    FIR9: {
      type: String,
    },
    FIR9Comments: {
      type: String,
    },
    FIR10: {
      type: String,
    },
    FIR10Comments: {
      type: String,
    },
    FIR11: {
      type: String,
    },
    FIR11Comments: {
      type: String,
    },
    FIR12: {
      type: String,
    },
    FIR12Comments: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Part || mongoose.model("Part", PartSchema);
