import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import { User } from '../models/User.js';
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({ message: "Error creating user" });
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=index.js.map