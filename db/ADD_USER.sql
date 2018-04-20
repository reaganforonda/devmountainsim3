INSERT INTO users
(username, password)
VALUES ($1, $2)
RETURNING id, username, password, profile_pic;