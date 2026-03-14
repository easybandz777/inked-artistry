import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        // Log for now — future: send to CRM, email, database
        console.log('[Contact Form Submission]', data);
        return NextResponse.json({ success: true, message: 'Contact form received' });
    } catch {
        return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 400 });
    }
}
