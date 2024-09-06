import { db } from ".";
import {posts} from './schema';


const SEED_DATA: (typeof posts.$inferInsert)[] = [
    {
        title: "Preview Mode for Headless CMS",
        description: "How to implement preview mode in your headless CMS.",
        author: "shadcn",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, incidunt distinctio tempora et soluta fugit.",
        tags: [
            "web",
            "software",
            "tech"
        ],
        level:'intermediate',
        thumbnailURL: "https://static.wikia.nocookie.net/hello_world/images/3/3e/414a8ef0-f3bb-11e9-bdfc-d4aea2070a0f.jpg",
    },
    {
        title: "Dynamic Routing and Static Regeneration",
        description: "How to use incremental static regeneration using dynamic routes.",
        author: "shadcn",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, incidunt distinctio tempora et soluta fugit.",
        tags: [
            "web",
            "software",
            "tech"
        ],
        level:'intermediate',
        thumbnailURL: "https://static.wikia.nocookie.net/hello_world/images/3/3e/414a8ef0-f3bb-11e9-bdfc-d4aea2070a0f.jpg",
    },
    {
        title: "Server and Client Components",
        description: "React Server Components allow developers to build applications that span the server and client.",
        author: "shadcn",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, incidunt distinctio tempora et soluta fugit.",
        tags: [
            "web",
            "software",
            "tech"
        ],
        level:'beginner',
        thumbnailURL: "https://static.wikia.nocookie.net/hello_world/images/3/3e/414a8ef0-f3bb-11e9-bdfc-d4aea2070a0f.jpg",
    },
    {
        title: "Deploying Next.js Apps",
        description: "How to deploy your Next.js apps on Vercel",
        author: "shadcn",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, incidunt distinctio tempora et soluta fugit.",
        tags: [
            "web",
            "software",
            "tech"
        ],
        level:'advanced',
        thumbnailURL: "https://static.wikia.nocookie.net/hello_world/images/3/3e/414a8ef0-f3bb-11e9-bdfc-d4aea2070a0f.jpg",
    }
]

const seed = async () => {
    console.log("Seed start");
    await db.insert(posts).values(SEED_DATA)
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Seeding done!');
    process.exit(0);
  });