CREATE SCHEMA `Products` ;

CREATE TABLE Products.products(
	ProductId int,
	Title varchar(255),
	Description varchar(1400),
	Image varchar(255),
	Price float,
	Likes int
);

INSERT INTO Products.products(ProductID, Title, Description, Image, Price, Likes)
VALUES(1, 'Product 1', 'This is the description for Product 1', 'https://via.placeholder.com/200x200', 1.99, 3),
	  (2, 'Product 2', 'This is the description for Product 2', 'https://via.placeholder.com/200x200', 5.99, 1),
	  (3, 'Product 3', 'This is the description for Product 3', 'https://via.placeholder.com/200x200', 11.99, 0),
	  (4, 'Product 4', 'This is the description for Product 4', 'https://via.placeholder.com/200x200', 5.00, 21),
	  (5, 'Product 5', 'This is the description for Product 5', 'https://via.placeholder.com/200x200', 15.99, 4),
	  (6, 'Product 6', 'This is the description for Product 6', 'https://via.placeholder.com/200x200', 12.99, 3),
	  (7, 'Product 7', 'This is the description for Product 7', 'https://via.placeholder.com/200x200', 5.95, 7),
	  (8, 'Product 8', 'This is the description for Product 8', 'https://via.placeholder.com/200x200', 52.55, 9),
	  (9, 'Product 9', 'This is the description for Product 9', 'https://via.placeholder.com/200x200', 42.42, 42),
	  (10, 'Product 10', 'This is the description for Product 10', 'https://via.placeholder.com/200x200', 60.99, 1);