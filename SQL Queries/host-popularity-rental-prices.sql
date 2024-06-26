-- You’re given a table of rental property searches by users. 
-- The table consists of search results and outputs host information for searchers. 
-- Find the minimum, average, maximum rental prices for each host’s popularity rating. 
-- The host’s popularity rating is defined as below:
-- 0 reviews: New
-- 1 to 5 reviews: Rising
-- 6 to 15 reviews: Trending Up
-- 16 to 40 reviews: Popular
-- more than 40 reviews: Hot
-- Output host popularity rating and their minimum, average and maximum rental prices.

-- Table: airbnb_host_searches

-- id: int
-- price: float
-- property_type: varchar
-- room_type: varchar
-- amenities: varchar
-- accommodates: int
-- bathrooms: int
-- bed_type: varchar
-- cancellation_policy: varchar
-- cleaning_fee: bool
-- city: varchar
-- host_identity_verified: varchar
-- host_response_rate: varchar
-- host_since: datetime
-- neighbourhood: varchar
-- number_of_reviews: int
-- review_scores_rating: float
-- zipcode: int
-- bedrooms: int
-- beds: int

-- Question from https://platform.stratascratch.com/coding/9632-host-popularity-rental-prices
-- PostgreSQL

SELECT 
    rating, 
    MIN(price) AS min_price,
    AVG(price) AS avg_price,
    MAX(price) AS max_price
    FROM (SELECT 
        CASE
            WHEN number_of_reviews > 40 THEN 'Hot'
            WHEN number_of_reviews > 15 THEN 'Popular'
            WHEN number_of_reviews > 5 THEN 'Trending Up'
            WHEN number_of_reviews > 0 THEN 'Rising'
            ELSE 'New'
        END AS rating,
        number_of_reviews,
        price
        FROM airbnb_host_searches
        GROUP BY price, room_type, host_since, zipcode, number_of_reviews
        ORDER BY number_of_reviews DESC
    ) a GROUP BY rating;