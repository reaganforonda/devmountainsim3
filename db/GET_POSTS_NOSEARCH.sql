SELECT *  FROM POSTS
JOIN users on posts.author_id = users.id
WHERE users.id != $1