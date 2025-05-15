-- EXercice1

-- SELECT * FROM language;


-- SELECT 
--   film.title, 
--   film.description, 
--   language.name AS language_name
-- FROM 
--   film
-- JOIN 
--   language ON film.language_id = language.language_id;




-- SELECT 
--   film.title, 
--   film.description, 
--   language.name AS language_name
-- FROM 
--   language
-- LEFT JOIN 
--   film ON film.language_id = language.language_id;




-- CREATE TABLE new_film (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255)
-- );

-- INSERT INTO new_film (name) VALUES ('rmna obrtan');
-- INSERT INTO new_film (name) VALUES ('casayacasa');



-- CREATE TABLE customer_review (
--   review_id SERIAL PRIMARY KEY,
--   film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
--   language_id INT REFERENCES language(language_id),
--   title VARCHAR(255),
--   score INT CHECK (score BETWEEN 1 AND 10),
--   review_text TEXT,
--   last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );



-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (1, 1, 'Amazing movie', 9, 'I really loved the action scenes!');

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (2, 2, 'wa3r!', 10, 'The story was very deep and philosophical.');










-- Exrcice2




-- UPDATE film 
-- SET language_id = 2 
-- WHERE title = 'film asaad';




-- DROP TABLE customer_review;



-- SELECT COUNT(*) 
-- FROM rental 
-- WHERE return_date IS NULL;





-- SELECT DISTINCT film.title, film.rental_rate
-- FROM rental
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY film.rental_rate DESC
-- LIMIT 30;







-- SELECT f.title 
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
-- AND (f.description ILIKE '%sumo%' OR f.title ILIKE '%sumo%');




-- SELECT title 
-- FROM film 
-- WHERE length < 60 AND rating = 'R';





-- SELECT f.title 
-- FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- JOIN payment p ON r.rental_id = p.rental_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
-- AND p.amount > 4
-- AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';



-- SELECT DISTINCT f.title 
-- FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
-- AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
-- LIMIT 1;





