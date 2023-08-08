import path from 'path';
import fs from 'fs';
import { NextResponse } from 'next/server';

export function GET() {
    const filePath = path.join(process.cwd(), 'blog-contents', 'blogs.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(fileContent);

    return NextResponse.json(blogs);
}