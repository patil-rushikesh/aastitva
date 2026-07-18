import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const appsScriptUrl = process.env.APPS_SCRIPT_URL;
  
  if (!appsScriptUrl) {
    return NextResponse.json(
      { error: "Google Apps Script Web App URL configuration is missing." }, 
      { status: 500 }
    );
  }

  try {
    // 1. Parse incoming body data from frontend
    const body = await request.json();
    const { fullName, dob, whatsapp, bloodGroup, donationDate, location } = body;
    
    // 2. Validate essential inputs
    if (!fullName || !dob || !whatsapp || !bloodGroup || !donationDate || !location) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 3. Dispatch data payload directly to Google Apps Script 
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        dob,
        whatsapp,
        bloodGroup,
        donationDate,
        location,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Failed data handoff to Spreadsheet pipeline.");
    }

    return NextResponse.json(
      { success: true, message: "Registration saved successfully to Google Sheets." },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Spreadsheet API Processing error:", error);
    return NextResponse.json(
      { error: "Failed to save registration.", details: error.message }, 
      { status: 500 }
    );
  }
}