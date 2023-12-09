const { NextResponse } = require("next/server");

export async function GET(request) {

    const governorContractAddress = "0xEfF7B44035F4c0E38f5fec374C4d2C8db030adA1";

      
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