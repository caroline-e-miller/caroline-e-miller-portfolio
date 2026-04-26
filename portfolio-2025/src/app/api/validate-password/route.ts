import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const portfolioPassword = process.env.PORTFOLIO_PASSWORD;

    console.log( process.env, 'process.env');

    console.log({ portfolioPassword }, 'portfolioPassword');

    console.log({ req }, 'req')
    const body = await req.json();
    const { password } = body;

    console.log({ password }, 'password');

    try {
        if (!password) {
            return NextResponse.json({ error: 'At least attempt to enter a password, buddy.' }, { status: 400 });
        }

        if (password !== portfolioPassword) {
            return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
        }
        if (password === portfolioPassword) {
            return NextResponse.json({ message: 'Welcome to the portfolio!' }, { status: 200 });
        }
    } catch {
        return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
    }
}
