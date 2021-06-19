-- DROP SCHEMA demo;

CREATE SCHEMA demo AUTHORIZATION postgres;

-- demo.addresses definition

-- Drop table

-- DROP TABLE demo.addresses;

CREATE TABLE demo.addresses (
	id serial NOT NULL,
	line_1 varchar NOT NULL,
	line_2 varchar NULL,
	city varchar NOT NULL,
	state varchar NOT NULL,
	zipcode varchar NOT NULL,
	country varchar NOT NULL,
	"search" varchar NULL,
	CONSTRAINT addresses_pkey PRIMARY KEY (id)
);



-- Sample records

INSERT INTO demo.addresses
(id, addess_1, addess_2, city, state, zipcode, country, "search")
VALUES(8, 'Massachusetts Hall', '', 'Cambridge', 'MA', '02138', 'US', 'massachusetts hall, cambridge, ma, 02138');
INSERT INTO demo.addresses
(id, addess_1, addess_2, city, state, zipcode, country, "search")
VALUES(1, '3400 N. Charles St.', '', 'Baltimore', 'MD', '21218', 'US', '3400 n. charles st., baltimore, md, 21218');
INSERT INTO demo.addresses
(id, addess_1, addess_2, city, state, zipcode, country, "search")
VALUES(2, 'Roosevelt Way NE', '', 'Seattle', 'WA', '98115', 'US', 'roosevelt way ne, seattle, wa, 98115');
INSERT INTO demo.addresses
(id, addess_1, addess_2, city, state, zipcode, country, "search")
VALUES(3, '1600 Holloway Ave', '', 'San Francisco', 'CA', '94132', 'US', '1600 holloway ave, san francisco, ca, 94132');
INSERT INTO demo.addresses
(id, addess_1, addess_2, city, state, zipcode, country, "search")
VALUES(4, '1600 Holloway Ave', 'Suite 10', 'San Francisco', 'CA', '94132', 'US', '1600 holloway ave, suite 10, san francisco, ca, 94132');
INSERT INTO demo.addresses
(id, addess_1, addess_2, city, state, zipcode, country, "search")
VALUES(5, '1600 Holloway Ave', 'Suite 20', 'San Francisco', 'CA', '94132', 'US', '1600 holloway ave, suite 20, san francisco, ca, 94132');
INSERT INTO demo.addresses
(id, addess_1, addess_2, city, state, zipcode, country, "search")
VALUES(6, '500 S State St', '', 'Ann Arbor', 'MI', '48109', 'US', '500 s state st, ann arbor, mi, 48109');
INSERT INTO demo.addresses
(id, addess_1, addess_2, city, state, zipcode, country, "search")
VALUES(7, '185 Berry St', 'Suite 6100', 'San Francisco', 'CA', '94107', 'US', '185 berry st, suite 6100, san francisco, ca, 94107');
