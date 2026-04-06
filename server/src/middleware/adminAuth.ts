import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.admin_token;

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // check admin role
    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Only admin can access",
      });
    }

    // attach admin data
    (req as any).admin = decoded;

    next();

  } catch (error: any) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default adminAuth;