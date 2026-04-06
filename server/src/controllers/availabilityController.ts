import type { Request, Response } from "express";
import Availability from "../models/availabilityModel.js";

// GET availability
export const getAvailability = async (req: Request, res: Response) => {
  try {
    const rooms = await Availability.find();

    const result: Record<string, string[]> = {
      room1: [],
      room2: [],
    };

    rooms.forEach((room) => {
      result[room.roomId] = room.unavailableDates;
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE availability
export const updateAvailability = async (
  req: Request<{ roomId: string }>,
  res: Response
) => {
  const roomId = req.params.roomId;

  const { unavailableDates = [] } = req.body || {}; // ✅ FIX

  try {
    let room = await Availability.findOne({ roomId });

    if (!room) {
      room = new Availability({
        roomId,
        unavailableDates,
      });
    } else {
      room.unavailableDates = unavailableDates;
    }

    await room.save();

    res.json({
      message: "Availability updated",
      room,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};