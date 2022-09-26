BEGIN;

drop table if exists users, products, categories, cart cascade;

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(200) UNIQUE NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        avatar TEXT
    );

CREATE TABLE
    categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200)
    );

CREATE TABLE
    products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200),
        image TEXT,
        price decimal,
        categoryId INT,
        CONSTRAINT FKcategoryId FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE
    );

CREATE TABLE
    cart (
        userId INT NOT NULL,
        productId INT NOT NULL,
        quantity INT DEFAULT 1,
        timeAdded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT FKuserId FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT FKproductId FOREIGN KEY (productId) REFERENCES users(id) ON DELETE CASCADE,
        PRIMARY KEY (userId, productId)
    );

INSERT INTO
    users (
        email,
        username,
        password,
        avatar
    )
VALUES (
        'katty@gmail.com',
        'Katty',
        '$2a$10$Q4WJ8gPjyvinnEawSsguju/DK7xUSYPQigBoRDGuY6bKT2IWjjsB2',
        'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=600'
    ), (
        'ex@gmail.com',
        'Example',
        '$2a$10$Q4WJ8gPjyvinnEawSsguju/DK7xUSYPQigBoRDGuY6bKT2IWjjsB2',
        'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=600'
    );

INSERT INTO categories (name)
VALUES ('Smart watches'), ('Wall watches');

INSERT INTO
    products (name, image, price, categoryId)
VALUES (
        'Wyze watch',
        'https://cdn.shopify.com/s/files/1/0580/0450/4738/products/47cblue3.png?v=1651261060&width=1500',
        50,
        1
    ), (
        'Apple watch',
        'https://msdrnews.com/wp-content/uploads/2022/08/Apple-Watch.jpg',
        200,
        1
    ), (
        'Wall watch',
        'https://i.pinimg.com/originals/ef/67/06/ef67067010009c6c604047735ab3dbb4.jpg',
        20,
        2
    );

INSERT INTO
    cart (userId, productId, quantity)
VALUES (1, 1, 1), (2, 1, 2);

COMMIT;