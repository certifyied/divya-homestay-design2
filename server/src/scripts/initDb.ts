import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../models/User.js';
import Admin from '../models/Admin.js';
import Experience from '../models/Experience.js';
import Availability from '../models/availabilityModel.js';

dotenv.config();

const initDatabase = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGO_URL;
    if (!mongoUri) {
      throw new Error('MONGO_URI is missing in .env');
    }

    console.log('Connecting to new MongoDB Cluster...');
    await mongoose.connect(mongoUri);
    console.log('✅ Successfully connected to MongoDB cluster!');

    console.log('Syncing models and ensuring collections/indexes exist...');
    
    await User.init();
    await Admin.init();
    await Experience.init();
    await Availability.init();

    console.log('✅ Collections and indexes created successfully!');
    
    // Check if initial availability records exist, create defaults if empty
    const room1Availability = await Availability.findOne({ roomId: 'room1' });
    if (!room1Availability) {
      await Availability.create({ roomId: 'room1', unavailableDates: [] });
      console.log('  - Initialized room1 availability');
    }
    
    const room2Availability = await Availability.findOne({ roomId: 'room2' });
    if (!room2Availability) {
      await Availability.create({ roomId: 'room2', unavailableDates: [] });
      console.log('  - Initialized room2 availability');
    }

    console.log('🎉 Database setup & commit to new cluster completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error connecting/initializing database:', error);
    process.exit(1);
  }
};

initDatabase();
