
-- parent Comments
INSERT INTO "comment" (
    user_id, post_id, content, created_at, updated_at
) VALUES
    (1, 1, 'Great post! Very informative.', NOW(), NOW()),
    (2, 2, 'I found this really helpful, thanks!', NOW(), NOW()),
    (3, 1, 'Interesting perspective, I like it!', NOW(), NOW()),
    (4, 2, 'Can you elaborate on this point?', NOW(), NOW()),
    (5, 3, 'I disagree with your conclusion.', NOW(), NOW()),
    (6, 4, 'This is a topic worth exploring further.', NOW(), NOW()),
    (7, 5, 'I have a question about your methodology.', NOW(), NOW()),
    (8, 6, 'Thanks for sharing your insights!', NOW(), NOW()),
    (9, 7, 'I appreciate the depth of your analysis.', NOW(), NOW()),
    (10, 8, 'This is a complex issue, well done!', NOW(), NOW()),
    (11, 9, 'I would like to see more data on this topic.', NOW(), NOW()),
    (12, 10, 'Your argument is well-structured and convincing.', NOW(), NOW());

-- child comments
INSERT INTO "comment" (
    user_id, post_id, parent_id, content, created_at, updated_at
) VALUES
    (3, 1, 1, 'Great post! Very informative.', NOW(), NOW());
