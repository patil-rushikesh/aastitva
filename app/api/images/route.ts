import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const MONGO_URI = process.env.MONGO_URI
const DB_NAME = "your-db-name"

export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URI!)
  try {
    await client.connect()
    const db = client.db("aastitvaNotices")
    const images = await db
      .collection("gallery_images")
      .find({}, { projection: { _id: 0, id: 1, src: 1, alt: 1, category: 1 } })
      .sort({ id: 1 })
      .toArray()
    return NextResponse.json(images)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 })
  } finally {
    await client.close()
  }
}
