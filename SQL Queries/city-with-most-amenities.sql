-- You're given a dataset of searches for properties on Airbnb. 
-- For simplicity, let's say that each search result (i.e., each row) represents a unique host.
-- Find the city with the most amenities across all their host's properties.
-- Output the name of the city.

-- Table: airbnb_search_details

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

-- Question from https://platform.stratascratch.com/coding/9633-city-with-most-amenities
-- PostgreSQL

SELECT 
    city
    FROM airbnb_search_details
    GROUP BY city
    ORDER BY SUM(1 + CHAR_LENGTH(amenities) - CHAR_LENGTH(REPLACE(amenities, ',', ''))) DESC
    LIMIT 1;