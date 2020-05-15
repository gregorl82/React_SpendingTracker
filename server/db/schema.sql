DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS merchants;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS budgets;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR (255) NOT NULL
);

CREATE TABLE merchants (
    id SERIAL PRIMARY KEY,
    merchant_name VARCHAR (255) NOT NULL
);

CREATE TABLE budgets (
    id SERIAL PRIMARY KEY,
    budget_name VARCHAR (255),
    budget_amount DECIMAL(15, 2),
    warning_limit DECIMAL(15, 2)
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    merchant_id INT REFERENCES merchants(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    budget_id INT REFERENCES budgets(id) ON DELETE CASCADE,
    amount DECIMAL(15, 2),
    transaction_time TIMESTAMP
); 