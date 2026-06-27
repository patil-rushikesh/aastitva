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
    const { fullName, bloodGroup, whatsapp, location } = body;

    // 2. Basic validation to ensure all fields are present
    if (!fullName || !bloodGroup || !whatsapp || !location) {
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

    // 5. Insert the data along with a timestamp
    const result = await collection.insertOne({
      fullName,
      bloodGroup,
      whatsapp,
      location,
      submittedAt: new Date(),
    });

    // 6. Return success response
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
    // 7. Ensure the connection is always closed
    await client.close();
  }
}