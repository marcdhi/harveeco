const { NextResponse } = require("next/server");

export async function GET(request) {
    return NextResponse.json({ hello: "world" });
}