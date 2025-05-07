const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    author: String,
    date:{
        type: Date,
        default: Date.now,
    },
    approvalStatus: { type: String, default: '1' }, // Nuevo campo
  },{
    timestamps: true,
  }
);

module.exports= model("Note", noteSchema);
