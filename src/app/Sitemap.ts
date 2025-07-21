import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap{
    return [
        {
            url: 'https://sovicheasok.info',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0
        },
        {
            url: 'https://www.sovicheasok.info/todos',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: 'https://www.sovicheasok.info/user',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.sovicheasok.info/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7
        },
        {
            url: 'https://www.sovicheasok.info/product',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6
        }
    ]
}