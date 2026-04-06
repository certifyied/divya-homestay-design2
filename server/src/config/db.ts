import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URL || process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('Missing MongoDB connection string: set MONGO_URL or MONGO_URI');
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const isSrvUri = (process.env.MONGO_URL || process.env.MONGO_URI || '').startsWith('mongodb+srv://');
    const isSrvLookupFailure =
      /querySrv/i.test(message) && (/ECONNREFUSED/i.test(message) || /ENOTFOUND/i.test(message) || /ETIMEOUT/i.test(message));

    console.error(`Error: ${message}`);

    if (isSrvUri && isSrvLookupFailure) {
      console.error(
        [
          '',
          'MongoDB Atlas SRV lookup failed (DNS/network issue). Fix options:',
          '- Use a standard (non-SRV) connection string from Atlas (mongodb://host1,host2,host3/...) and set it in MONGO_URL.',
          '- Or change your DNS/network to allow SRV lookups (try different Wi‑Fi, disable VPN/proxy, or set DNS to 8.8.8.8 / 1.1.1.1).',
          '- Ensure your IP is allowed in Atlas Network Access and your cluster is not paused.',
        ].join('\n'),
      );
    }

    process.exit(1);
  }
};

export default connectDB;