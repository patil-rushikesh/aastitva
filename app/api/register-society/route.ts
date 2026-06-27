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
    const { societyName, inchargeName, primaryContact, altContact, expectedCount, location, selectedDate } = body;

    // 2. Validate required fields
    // (altContact is optional, so we don't validate it here)
    if (!societyName || !inchargeName || !primaryContact || !expectedCount || !location || !selectedDate) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 3. Connect to MongoDB
    await client.connect();
    
    // 4. Select database and collection
    const db = client.db("aastitvaCampaigns"); 
    const collection = db.collection("bloodDonationSocietyRegistrations");

    // 5. Insert the data
    const result = await collection.insertOne({
      societyName,
      inchargeName,
      primaryContact,
      altContact: altContact || null, // Handle optional field
      expectedCount,
      location,
      selectedDate,
      submittedAt: new Date(),
    });

    // 6. Return success response
    return NextResponse.json(
      { success: true, message: "Society registration saved successfully.", id: result.insertedId },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error saving society registration:", error);
    return NextResponse.json(
      { error: "Failed to save registration." }, 
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}