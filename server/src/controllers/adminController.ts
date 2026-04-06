import type { Request, Response } from "express";
import Admin from "../models/Admin.js"; // adjust path if needed
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


// export const registerAdmin = async (req: Request, res: Response) => {
//   try {
//     console.log("🔵 Incoming Request Body:", req.body);

//     const { name, email, mobile, password } = req.body;

//     // 1️⃣ Check required fields
//     if (!name || !email || !mobile || !password) {
//       return res.status(400).json({
//         message: "All fields are required",
//       });
//     }

//     // 2️⃣ Validate email (must end with @gmail.com)
//     if (!email.endsWith("@gmail.com")) {
//       return res.status(400).json({
//         message: "Email must be a valid @gmail.com address",
//       });
//     }

//     // 3️⃣ Validate mobile (exactly 10 digits)
//     if (mobile.length !== 10 || isNaN(Number(mobile))) {
//       return res.status(400).json({
//         message: "Mobile number must be exactly 10 digits and contain only numbers",
//       });
//     }

//     // 4️⃣ Password validation
//     if (password.length < 6) {
//       return res.status(400).json({
//         message: "Password must be at least 6 characters",
//       });
//     }

//     // Check password contains at least one letter and one number
//     let hasLetter = false;
//     let hasNumber = false;

//     for (let char of password) {
//       if (char >= "A" && char <= "Z") hasLetter = true;
//       if (char >= "a" && char <= "z") hasLetter = true;
//       if (char >= "0" && char <= "9") hasNumber = true;
//     }

//     if (!hasLetter || !hasNumber) {
//       return res.status(400).json({
//         message: "Password must contain at least one letter and one number",
//       });
//     }

//     // 5️⃣ Check existing admin
//     const existingAdmin = await Admin.findOne({
//       $or: [{ email }, { mobile }],
//     });

//     if (existingAdmin) {
//       return res.status(400).json({
//         message: "Admin already exists with this email or mobile",
//       });
//     }

//     // 6️⃣ Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // 7️⃣ Create admin
//     const newAdmin = new Admin({
//       name,
//       email,
//       mobile,
//       password: hashedPassword,
//       role: "admin",
//     });

//     await newAdmin.save();

//     console.log("✅ Admin registered:", newAdmin._id);

//     // 8️⃣ Response
//     return res.status(201).json({
//       message: "Admin registered successfully",
//       admin: {
//         id: newAdmin._id,
//         name: newAdmin.name,
//         email: newAdmin.email,
//         mobile: newAdmin.mobile,
//         role: newAdmin.role,
//       },
//     });

//   } catch (error: any) {
//     console.error("🔥 Register Admin Error:", error);

//     if (error.code === 11000) {
//       return res.status(400).json({
//         message: "Email or mobile already exists",
//       });
//     }

//     return res.status(500).json({
//       message: "Server error",
//     });
//   }
// };




export const registerAdmin = async (req: Request, res: Response) => {
  try {
    console.log("🔵 Incoming Request Body:", req.body);

    const { name, email, mobile, password } = req.body;

    // 1️⃣ Check required fields
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 2️⃣ Validate email
    if (!email.endsWith("@gmail.com")) {
      return res.status(400).json({
        message: "Email must be a valid @gmail.com address",
      });
    }

    // 3️⃣ Validate mobile (same as schema)
    const mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({
        message: "Mobile number must be exactly 10 digits",
      });
    }

    // 4️⃣ Password validation (same as schema)
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    // 5️⃣ Check existing admin
    const existingAdmin = await Admin.findOne({
      $or: [{ email }, { mobile }],
    });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists with this email or mobile",
      });
    }

    // 6️⃣ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 7️⃣ Create admin
    const newAdmin = new Admin({
      name,
      email,
      mobile,
      password: hashedPassword,
      role: "admin",
    });

    await newAdmin.save();

    console.log("✅ Admin registered:", newAdmin._id);

    // 8️⃣ Response
    return res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
        mobile: newAdmin.mobile,
        role: newAdmin.role,
      },
    });

  } catch (error: any) {
    console.error("🔥 Register Admin Error:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email or mobile already exists",
      });
    }

    return res.status(500).json({
      message: "Server error",
    });
  }
};



//ADMIN LOGIN
export const loginAdmin = async (req: Request, res: Response) => {
  try {
    console.log("🔵 Login Request:", req.body);

    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 2. Check if admin exists
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ error: "Email or password is incorrect" });
    }

    console.log("🔐 Stored Hashed Password:", admin.password);

    // 3. Check if active
    if (!admin.isActive) {
      return res.status(403).json({
        error: "Admin profile is deactivated",
      });
    }

    // 4. Compare password
    const passwordMatch = await bcrypt.compare(password, admin.password);
    console.log("passwordMatch : ", passwordMatch);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Email or password is incorrect" });
    }

    console.log("✅ Login successful");

    // 5. Generate JWT Token
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("admin_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",
      domain: ".pendoraglamps.com"
    });

    console.log("🎫 Token generated ==== ", token);

    // 6. Response (NO password)
    return res.status(200).json({
      message: "Login successful",
      token, // ✅ added
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        mobile: admin.mobile,
        role: admin.role,
      },
    });

  } catch (error: any) {
    console.error("🔥 Login Error:", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};


//CHECK ADMIN
// export const checkAdmin = (req: Request, res: Response) => {
//   try {
//     const admin = (req as any).admin;

//     if (admin) {
//       console.log("✅ Authorized admin:", admin);
//     } else {
//       console.log("❌ Admin not authorized");
//     }

//     res.status(200).json({
//       success: true,
//       message: "Authorized admin",
//       admin: admin,
//     });

//   } catch (error: any) {
//     console.error("Error during admin check:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: error.message,
//     });
//   }
// };



export const checkAdmin = (req: Request, res: Response) => {
  try {
    const token = (req as any).cookies?.admin_token || req.cookies?.admin_token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    res.status(200).json({
      success: true,
      message: "Authorized admin",
      admin: decoded,
    });

  } catch (error: any) {
    console.error("Error during admin check:", error.message);

    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};


//LOGOUT
export const adminLogout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("admin_token", {
      httpOnly: true,
      secure: true,      // use false if localhost
      sameSite: "none",  // use "lax" for localhost
    });

    return res.status(200).json({
      message: "Admin logged out successfully",
    });
  } catch (error: any) {
    console.error("Logout Error:", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};


// GET ADMIN PROFILE
export const getAdminProfile = async (req: Request, res: Response) => {
  try {
    const adminId = (req as any).admin.id;

    const admin = await Admin.findById(adminId).select("-password");

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const updateAdminProfile = async (req: Request, res: Response) => {
  try {
    const adminId = (req as any).admin.id;

    let { name, email, mobile } = req.body;

    const nameTrim = name?.trim();
    const emailTrim = email?.trim();
    const mobileTrim = mobile?.trim();

    // ❗ Prevent update if all fields are empty
    if (!nameTrim && !emailTrim && !mobileTrim) {
      return res.status(400).json({
        message: "At least one field is required to update",
      });
    }

    // Name validation
    if (nameTrim && nameTrim.length < 3) {
      return res.status(400).json({
        message: "Name must be at least 3 characters",
      });
    }

    // Email validation
    if (emailTrim && !/^.+@gmail\.com$/.test(emailTrim)) {
      return res.status(400).json({
        message: "Email must be a valid @gmail.com address",
      });
    }

    // Mobile validation
    if (mobileTrim && !/^\d{10}$/.test(mobileTrim)) {
      return res.status(400).json({
        message: "Mobile number must be exactly 10 digits",
      });
    }

    // Duplicate email check
    if (emailTrim) {
      const existingEmail = await Admin.findOne({ email: emailTrim });
      if (existingEmail && existingEmail._id.toString() !== adminId) {
        return res.status(400).json({ message: "Email already in use" });
      }
    }

    // Duplicate mobile check
    if (mobileTrim) {
      const existingMobile = await Admin.findOne({ mobile: mobileTrim });
      if (existingMobile && existingMobile._id.toString() !== adminId) {
        return res.status(400).json({ message: "Mobile already in use" });
      }
    }

    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    admin.name = nameTrim || admin.name;
    admin.email = emailTrim || admin.email;
    admin.mobile = mobileTrim || admin.mobile;

    await admin.save();

    res.status(200).json({
      message: "Profile updated successfully",
      admin,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// CHANGE PASSWORD
export const changeAdminPassword = async (req: Request, res: Response) => {
  try {
    const adminId = (req as any).admin.id;

    const { oldPassword, retypeOldPassword, newPassword } = req.body;

    if (!oldPassword || !retypeOldPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1️⃣ Check if oldPassword matches retypeOldPassword
    if (oldPassword !== retypeOldPassword) {
      return res.status(400).json({ message: "Old passwords do not match" });
    }

    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // 2️⃣ Compare oldPassword with stored password
    const isMatch = await bcrypt.compare(oldPassword, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Old password incorrect" });
    }

    // 3️⃣ Hash new password
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(newPassword, salt);

    await admin.save();

    res.status(200).json({ message: "Password changed successfully" });

  } catch (error) {
    console.error("Password change error:", error);
    res.status(500).json({ message: "Server error" });
  }
};