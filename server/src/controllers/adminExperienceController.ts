import type { Request, Response } from "express";
import Experience from "../models/Experience.js";
import cloudinary from "../config/cloudinary.js";

export const createExperience = async (req: Request, res: Response) => {
    try {

        const { title, description } = req.body;

        console.log("Request Body =", req.body);
        console.log("Uploaded File =", req.file);

        if (!title || !description || !req.file) {
            return res.status(400).json({
                message: "Title, description and image are required"
            });
        }

        // Upload image to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(
            (req.file as any).path
        );

        console.log("Uploaded File:", uploadResult);

        const newExperience = new Experience({
            title,
            description,
            images: [uploadResult.secure_url]
        });

        const savedExperience = await newExperience.save();

        res.status(201).json({
            message: "Experience created successfully",
            data: savedExperience
        });

    } catch (error: any) {
        console.log(error);
        res.status(error.status || 500).json({
            error: error.message || "Internal server error"
        });
    }
};


//UPDAET EXPERIENCE
export const updateExperience = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const experience = await Experience.findById(id);

        if (!experience) {
            return res.status(404).json({ message: "Experience not found" });
        }

        // ✅ Update text fields
        if (title) experience.title = title;
        if (description) experience.description = description;

        // ✅ If new image uploaded
        if (req.file) {
            if (experience.images && experience.images.length > 0) {
                const oldImageUrl = experience.images[0];

                if (typeof oldImageUrl === "string") {
                    const publicId = oldImageUrl
                        .split("/")
                        .slice(-2)
                        .join("/")
                        .split(".")[0];

                    if (publicId) {
                        await cloudinary.uploader.destroy(publicId);
                    }
                }
            }

            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "experiences",
            });

            experience.images = [result.secure_url];
        }

        const updatedExperience = await experience.save();

        res.status(200).json({
            message: "Experience updated successfully",
            data: updatedExperience,
        });

    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Server error",
        });
    }
};


//DELETE EXPERIENCE
export const deleteExperience = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const experience = await Experience.findById(id);

        if (!experience) {
            return res.status(404).json({ message: "Experience not found" });
        }

        // 🔥 1. Delete images from Cloudinary
        if (experience.images && experience.images.length > 0) {
            for (const url of experience.images) {
                if (typeof url === "string") {
                    const publicId = url
                        .split("/")
                        .slice(-2)
                        .join("/")
                        .split(".")[0];

                    if (publicId) {
                        await cloudinary.uploader.destroy(publicId);
                    }
                }
            }
        }

        // 🔥 2. Delete from DB
        await Experience.findByIdAndDelete(id);

        res.status(200).json({
            message: "Experience deleted successfully",
        });

    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Server error",
        });
    }
};


//GET ALL EXPERIENCE
export const getAllExperiences = async (req: Request, res: Response) => {
    try {
        const experiences = await Experience.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: experiences.length,
            data: experiences,
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Server error",
        });
    }
};


//GET SINGLE EXPERIENCE
export const getSingleExperience = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const experience = await Experience.findById(id);

        if (!experience) {
            return res.status(404).json({
                success: false,
                message: "Experience not found",
            });
        }

        res.status(200).json({
            success: true,
            data: experience,
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Server error",
        });
    }
};