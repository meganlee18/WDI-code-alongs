CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(200),
    image_url VARCHAR(400)
);

SELECT name FROM dishes;
SELECT id, name, image_url FROM dishes;
SELECT * FROM dishes;

INSERT INTO dishes (name, image_URL) VALUES ('pudding', 'https://www.justonecookbook.com/wp-content/uploads/2016/09/Japanese-Pudding-II-600x900.jpg');

INSERT INTO dishes (name, image_URL) VALUES ('chicken beef', 'https://www.banquet.com/sites/g/files/qyyrlu296/files/images/products/chicken-fried-beef-steak-58989.png');

-- DELETE FROM dishes WHERE name = 'chicken beef';
-- DELETE FROM dishes WHERE id = 2;

CREATE TABLE comments (
    id SERIAL4 PRIMARY KEY,
    content VARCHAR(400) NOT NULL,
    dish_id INTEGER NOT NULL,
    FOREIGN KEY (dish_id) REFERENCES dishes (id) ON DELETE CASCADE
);

INSERT INTO comments (content, dish_id) VALUES ('great', 16);

CREATE TABLE users (
    id SERIAL4 PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password_digest VARCHAR(400) NOT NULL
);

alter table comments add user_id integer;

alter table comments drop column user_id;

CREATE TABLE likes (
    id SERIAL4 PRIMARY KEY,
    user_id INTEGER NOT NULL,
    dish_id INTEGER NOT NULL,
    FOREIGN KEY (dish_id) REFERENCES dishes (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);