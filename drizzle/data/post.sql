INSERT INTO "post" (
    user_id, title, short_description, content, status, category_id, created_at, updated_at
) VALUES
    (1, 'Understanding Next.js', 'A deep dive into Next.js features.', 'Next.js is a React framework that enables...', 'published', 1, NOW(), NOW()),
    (1, 'Drizzle ORM Basics', 'Getting started with Drizzle ORM.', 'Drizzle ORM is a lightweight ORM for...', 'draft', 2, NOW(), NOW()),
    (2, 'Zod Validation in Drizzle', 'How to use Zod for validation in Drizzle.', 'Zod provides a powerful way to validate...', 'published', 3, NOW(), NOW()),
    (2, 'Building REST APIs with Next.js', 'Creating RESTful APIs using Next.js.', 'Next.js can be used to build APIs...', 'published', 1, NOW(), NOW()),
    (3, 'Advanced TypeScript Techniques', 'Exploring advanced TypeScript features.', 'TypeScript offers many advanced features...', 'draft', 2, NOW(), NOW()),
    (3, 'Integrating Next.js with Drizzle', 'Combining Next.js and Drizzle ORM for seamless data fetching.', 'In this post, we will explore how to integrate Next.js with Drizzle ORM...', 'published', 1, NOW(), NOW()),
    (3, 'Testing in Next.js', 'A guide to testing Next.js applications.', 'Testing is a crucial part of development...', 'draft', 2, NOW(), NOW()),
    (4, 'Deployment Strategies for Next.js', 'Best practices for deploying Next.js applications.', 'Deploying Next.js applications requires careful planning...', 'published', 1, NOW(), NOW()),
    (4, 'State Management in Next.js', 'Managing state in Next.js applications.', 'State management is essential for building...', 'draft', 2, NOW(), NOW()),
    (4, 'Optimizing Performance in Next.js', 'Techniques for improving Next.js application performance.', 'Performance optimization is key to...', 'draft', 3, NOW(), NOW()),
    (5, 'Internationalization in Next.js', 'Implementing i18n in Next.js applications.', 'Internationalization is crucial for...', 'draft', 4, NOW(), NOW()),
    (6, 'Error Handling in Next.js', 'Best practices for error handling in Next.js applications.', 'Error handling is an important aspect of...', 'draft', 4, NOW(), NOW()),
    (6, 'Static Site Generation in Next.js', 'Leveraging SSG for improved performance.', 'Static Site Generation (SSG) is a powerful feature...', 'draft', 4, NOW(), NOW()),
    (6, 'Incremental Static Regeneration in Next.js', 'Understanding ISR for dynamic content.', 'Incremental Static Regeneration (ISR) allows...', 'draft', 5, NOW(), NOW()),
    (7, 'Image Optimization in Next.js', 'Best practices for optimizing images in Next.js.', 'Image optimization is crucial for...', 'draft', 6, NOW(), NOW()),
    (7, 'Client-Side Rendering in Next.js', 'Exploring client-side rendering techniques.', 'Client-side rendering (CSR) is a powerful approach...', 'draft', 7, NOW(), NOW()),
    (8, 'Server-Side Rendering in Next.js', 'Understanding server-side rendering in Next.js.', 'Server-side rendering (SSR) is a key feature...', 'draft', 6, NOW(), NOW()),
    (9, 'Static Site Generation vs Server-Side Rendering', 'Comparing SSG and SSR in Next.js.', 'Both SSG and SSR have their use cases...', 'draft', 5, NOW(), NOW());