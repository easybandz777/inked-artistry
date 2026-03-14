import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('[Consultation Request]', data);
        return NextResponse.json({ success: true, message: 'Consultation request received' });
    } catch {
        return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 400 });
    }
}
