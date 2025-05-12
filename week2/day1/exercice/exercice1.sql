


CREATE TABLE items (
     item_id SERIAL PRIMARY KEY,
 item_name VARCHAR (50) NOT NULL,
 price int  NOT NULL
);
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL
);
	





 select * from items


 select * from customers









INSERT INTO items ( item_name, price) 
VALUES
    ('Small Desk', 100),
    ('Large deskk', 300),
    ('Fan', 80);

INSERT INTO customers (first_name, last_name) VALUES
 ('Greg','Jones'),
 ('Sandra','Jones'),
 ('Scoot','Scoot'),
 ('Trevor','Green'),
  ('Melanie','Jhonson');
select * from items where price >  80 
 select * from items where price <=  300 
 select * from customers where last_name ='Smit'
  select * from customers where last_name ='Jones'
   select * from customers where last_name !='Scoot'