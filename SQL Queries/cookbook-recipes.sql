-- You are given the table with titles of recipes from a cookbook and their page numbers. 
-- You are asked to represent how the recipes will be distributed in the book.
-- Produce a table consisting of three columns: left_page_number, left_title and right_title. 
-- The k-th row (counting from 0), should contain the number and the title of the page with 
-- the number 2 x 𝑘 in the first and second columns respectively, and the title of the page 
-- with the number 2 x k + 1 in the third column.
-- Each page contains at most 1 recipe. 
-- If the page does not contain a recipe, the appropriate cell should remain empty (NULL value). 
-- Page 0 (the internal side of the front cover) is guaranteed to be empty.

-- Table: cookbook_titles

-- page_number: int
-- title: varchar

-- Question from https://platform.stratascratch.com/coding/2089-cookbook-recipes
-- PostgreSQL

SELECT 
    left_page_number,
    l.title AS left_title,
    r.title AS right_title
    FROM (
    SELECT 
        generate_series AS left_page_number
        FROM GENERATE_SERIES(0, (SELECT MAX(page_number) FROM cookbook_titles))
        WHERE generate_series % 2 = 0
    ) s 
    LEFT JOIN cookbook_titles l 
    ON l.page_number=s.left_page_number
    LEFT JOIN cookbook_titles r
    ON r.page_number=s.left_page_number + 1
    ORDER BY left_page_number ASC;