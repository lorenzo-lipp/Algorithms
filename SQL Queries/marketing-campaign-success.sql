-- You have a table of in-app purchases by user. 
-- Users that make their first in-app purchase are placed in a marketing campaign where they see call-to-actions for more in-app purchases. 
-- Find the number of users that made additional in-app purchases due to the success of the marketing campaign.

-- The marketing campaign doesn't start until one day after the initial in-app purchase so users that only made one or multiple purchases
--  on the first day do not count, nor do we count users that over time purchase only the products they purchased on the first day.

-- Table: marketing_campaign

-- user_id: int
-- created_at: datetime
-- product_id: int
-- quantity: int
-- price: int

-- Question from https://platform.stratascratch.com/coding/514-marketing-campaign-success-advanced
-- PostgreSQL

WITH 
first_purchases AS (
    SELECT user_id, first_purchase FROM 
        (SELECT user_id, COUNT(*) AS purchase_days, MIN(created_at) AS first_purchase FROM 
            (SELECT user_id, created_at, COUNT(*) 
                FROM marketing_campaign
                GROUP BY user_id, created_at
                ORDER BY user_id
            ) a 
            GROUP BY user_id) b 
    WHERE purchase_days > 1),
    
first_day_products AS (
    SELECT marketing_campaign.user_id, product_id
    FROM marketing_campaign 
    INNER JOIN first_purchases
    ON marketing_campaign.user_id = first_purchases.user_id
    WHERE first_purchase = created_at)
    
SELECT COUNT(DISTINCT user_id) 
FROM marketing_campaign 
WHERE 
    user_id IN (
        SELECT user_id
        FROM first_purchases
    ) AND 
    product_id NOT IN (
        SELECT product_id 
        FROM first_day_products 
        WHERE user_id = marketing_campaign.user_id
    );
