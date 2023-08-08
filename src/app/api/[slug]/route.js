import path from 'path';
import fs from 'fs';
import { NextResponse } from 'next/server';

export function GET(request, { params }) {
    const reqBlog = [];
    const filePath = path.join(process.cwd(), 'blog-contents', 'blogs.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(fileContent);

    blogs.forEach(item => {
        if (item.slug === params.slug) {
            reqBlog.push(item);
        }
    });

    if (reqBlog.length > 0) {
        return NextResponse.json(reqBlog);
    } else {
        return NextResponse.json({ "error": "Failed" });
    }
}