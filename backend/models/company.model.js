import mongoose, { Types } from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      Type: String,
      required: true,
    },
    discription: {
      Type: String,
    },
    website: {
      Type: String,
    },

    location: {
      Type: String,
    },
    logo: {
      type: String,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Company", companySchema);
