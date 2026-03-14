import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('[Waitlist Signup]', data);
        return NextResponse.json({ success: true, message: 'Added to waitlist' });
    } catch {
        return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 400 });
    }
}
