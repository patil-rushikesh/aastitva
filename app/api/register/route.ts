import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  const mongoUri = process.env.MONGODB_URI;
  
  if (!mongoUri) {
    return NextResponse.json(
      { error: "Database connection string is missing." }, 
      { status: 500 }
    );
  }

  const client = new MongoClient(mongoUri);

  try {
    // 1. Parse the incoming request body
    const body = await request.json();
    const { fullName, dob, whatsapp, bloodGroup, donationDate, location } = body;
    if (!fullName || !dob || !whatsapp || !bloodGroup || !donationDate || !location) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 3. Connect to MongoDB
    await client.connect();
    
    // 4. Select your database and collection 
    // (Adjust the DB and collection name as needed for your setup)
    const db = client.db("aastitvaCampaigns"); 
    const collection = db.collection("bloodDonationRegistrations");

    // 4. Insert the full payload
    const result = await collection.insertOne({
      fullName,
      dob,              // New field
      whatsapp,
      bloodGroup,
      donationDate,     // New field
      location,
      submittedAt: new Date(),
    });

    return NextResponse.json(
      { success: true, message: "Registration saved successfully.", id: result.insertedId },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error saving registration:", error);
    return NextResponse.json(
      { error: "Failed to save registration." }, 
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}