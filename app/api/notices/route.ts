import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

export async function GET() {
  const mongoUri = process.env.MONGODB_URI
  if (!mongoUri) {
    return NextResponse.json([])
  }

  const client = new MongoClient(mongoUri)

  try {
    await client.connect()
    const db = client.db("aastitvaNotices")
    const notices = await db.collection("notices").find().sort({ date: -1 }).limit(10).toArray()

    const sortedNotices = notices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json(sortedNotices)
  } catch (error) {
    console.error("Error fetching notices:", error)
    return NextResponse.json({ error: "Failed to fetch notices" }, { status: 500 })
  } finally {
    await client.close()
  }
}
