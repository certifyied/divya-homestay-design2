import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    images: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;