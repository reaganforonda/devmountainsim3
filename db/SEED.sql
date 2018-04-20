DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users(id)
);




INSERT INTO users
(username, password, profile_pic)
VALUES ('TEST NAME 1', 'password 1', 'pic1');
INSERT INTO users
(username, password, profile_pic)
VALUES ('TEST NAME 2', 'password 2', 'pic2');
INSERT INTO users
(username, password, profile_pic)
VALUES ('TEST NAME 3', 'password 3', 'pic3');
INSERT INTO users
(username, password, profile_pic)
VALUES ('TEST NAME 4', 'password 4', 'pic4');
INSERT INTO users
(username, password, profile_pic)
VALUES ('TEST NAME 5', 'password 5', 'pic5');


INSERT INTO posts
(title, img, content, author_id)
VALUES
('TEST', 'sdlkfjskld', 'sdfsdf', 1);

INSERT INTO posts
(title, img, content, author_id)
VALUES
('TEST 1', 'sdlkfjskld', 'sdfsdf', 2);

INSERT INTO posts
(title, img, content, author_id)
VALUES
('TEST 1', 'sdlkfjskld', 'sdfsdf', 1);

INSERT INTO posts
(title, img, content, author_id)
VALUES
('TEST 1', 'sdlkfjskld', 'sdfsdf', 3);
INSERT INTO posts
(title, img, content, author_id)
VALUES
('TEST 1', 'sdlkfjskld', 'sdfsdf', 4);
INSERT INTO posts
(title, img, content, author_id)
VALUES
('TEST 1', 'sdlkfjskld', 'sdfsdf', 5);