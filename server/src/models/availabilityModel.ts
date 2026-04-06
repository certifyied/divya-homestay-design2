import mongoose, { Document, Schema } from "mongoose";

export interface IAvailability extends Document {
  roomId: string;
  unavailableDates: string[];
}

const availabilitySchema: Schema = new Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  unavailableDates: {
    type: [String],
    default: [],
  },
});

const Availability = mongoose.model<IAvailability>(
  "Availability",
  availabilitySchema
);

export default Availability;