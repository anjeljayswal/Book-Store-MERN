import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.BASE_URL;

// Please create a free database for yourself.
// This database will be deleted after tutorial

