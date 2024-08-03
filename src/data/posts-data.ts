export interface IUser {
    name: string,
    email: string,
    profileImg: string,
}

export interface IPostsData {
    title: string,
    description: string,
    author: IUser,
    likes: number,
    dislikes: number,
}

export const postsData: IPostsData[] = [
    {
        title: "Understanding TypeScript",
        description: "A comprehensive guide to understanding and using TypeScript in your projects.",
        author: {
            name: "John Doe",
            email: "john.doe@example.com",
            profileImg: "profile.jpg",
        },
        likes: 150,
        dislikes: 10,
    },
    {
        title: "Introduction to React",
        description: "An introductory article about the basics of React and how to get started.",
        author: {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            profileImg: "profile2.webp",
        },
        likes: 200,
        dislikes: 5,
    },
    {
        title: "Advanced Node.js",
        description: "Explore advanced topics and best practices for developing with Node.js.",
        author: {
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            profileImg: "profile3.webp",
        },
        likes: 180,
        dislikes: 15,
    },
    {
        title: "CSS Best Practices",
        description: "Learn about the best practices for writing clean and maintainable CSS.",
        author: {
            name: "Bob Brown",
            email: "bob.brown@example.com",
            profileImg: "profile.jpg",
        },
        likes: 120,
        dislikes: 8,
    },
    {
        title: "Getting Started with MongoDB",
        description: "A beginner's guide to getting started with MongoDB, a popular NoSQL database.",
        author: {
            name: "Charlie Green",
            email: "charlie.green@example.com",
            profileImg: "profile2.webp",
        },
        likes: 95,
        dislikes: 12,
    }
];
