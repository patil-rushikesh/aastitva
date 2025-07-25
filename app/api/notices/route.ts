import { NextResponse } from "next/server"

// Mock data - In a real application, this would connect to MongoDB
const mockNotices = [
  {
    _id: "1",
    title: "Community Health Camp",
    content: "Free health checkup camp on January 15th at Community Center. All community members are welcome.",
    date: "2024-01-10",
    type: "event",
  },
  {
    _id: "2",
    title: "Education Drive Success",
    content: "Successfully distributed 500 books and school supplies to underprivileged children in rural areas.",
    date: "2024-01-08",
    type: "announcement",
  },
  {
    _id: "3",
    title: "Urgent: Flood Relief",
    content: "Immediate help needed for flood-affected families. Donations of food, clothes, and medicines welcome.",
    date: "2024-01-12",
    type: "urgent",
  },
  {
    _id: "4",
    title: "Volunteer Training Workshop",
    content: "Join our volunteer training workshop on January 20th. Learn about our programs and how you can help.",
    date: "2024-01-14",
    type: "event",
  },
  {
    _id: "5",
    title: "New Partnership Announcement",
    content: "We are excited to announce our partnership with Local Hospital for better healthcare services.",
    date: "2024-01-06",
    type: "announcement",
  },
]

export async function GET() {
  try {
    // In a real application, you would connect to MongoDB here
    // const client = new MongoClient(process.env.MONGODB_URI!)
    // const db = client.db('hopefoundation')
    // const notices = await db.collection('notices').find().sort({ date: -1 }).limit(10).toArray()

    // For now, return mock data
    const sortedNotices = mockNotices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json(sortedNotices)
  } catch (error) {
    console.error("Error fetching notices:", error)
    return NextResponse.json({ error: "Failed to fetch notices" }, { status: 500 })
  }
}
