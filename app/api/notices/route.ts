import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"


export async function GET() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI!)
    const db = client.db('aastitvaNotices')
    const notices = await db.collection('notices').find().sort({ date: -1 }).limit(10).toArray()

    const sortedNotices = notices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json(sortedNotices)
  } catch (error) {
    console.error("Error fetching notices:", error)
    return NextResponse.json({ error: "Failed to fetch notices" }, { status: 500 })
  }
}
