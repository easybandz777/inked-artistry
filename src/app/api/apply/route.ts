import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('[Training Application]', data);
        return NextResponse.json({ success: true, message: 'Application received' });
    } catch {
        return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 400 });
    }
}
