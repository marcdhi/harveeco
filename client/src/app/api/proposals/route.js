const { NextResponse } = require("next/server");

export async function GET(request) {
   
    return NextResponse.json({
        proposals: [
            {
                id: 1,
                title: "Proposal 1",
                description: "This is a proposal",
            },
            {
                id: 2,
                title: "Proposal 2",
                description: "This is another proposal",
            },
        ],
    });


}