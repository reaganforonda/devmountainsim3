SELECT posts.title, posts.img, posts.content, users.username, users.profile_pic  FROM POSTS
JOIN users on posts.author_id = users.id
WHERE posts.id = $1
