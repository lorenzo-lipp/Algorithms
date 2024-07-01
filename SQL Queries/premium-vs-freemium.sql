-- Find the total number of downloads for paying and non-paying users by date. 
-- Include only records where non-paying customers have more downloads than paying customers. 
-- The output should be sorted by earliest date first and contain 3 columns date, non-paying downloads, paying downloads.

-- Table: ms_user_dimension

-- user_id: int
-- acc_id: int

-- Table: ms_acc_dimension

-- acc_id: int
-- paying_customer: varchar

-- Table: ms_download_facts

-- date: datetime
-- user_id: int
-- downloads: int

-- Question from https://platform.stratascratch.com/coding/10300-premium-vs-freemium
-- PostgreSQL

SELECT 
    a.date, 
    a.total_downloads AS non_paying_downloads, 
    b.total_downloads AS paying_downloads 
    FROM (
    SELECT 
        date,
        SUM(downloads) AS total_downloads
        FROM ms_user_dimension 
        INNER JOIN ms_acc_dimension 
        ON ms_user_dimension.acc_id = ms_acc_dimension.acc_id
        INNER JOIN ms_download_facts
        ON ms_download_facts.user_id=ms_user_dimension.user_id
        WHERE paying_customer = 'no'
        GROUP BY date, paying_customer
    ) a INNER JOIN (
    SELECT 
        date,
        SUM(downloads) AS total_downloads
        FROM ms_user_dimension 
        INNER JOIN ms_acc_dimension 
        ON ms_user_dimension.acc_id = ms_acc_dimension.acc_id
        INNER JOIN ms_download_facts
        ON ms_download_facts.user_id=ms_user_dimension.user_id
        WHERE paying_customer = 'yes'
        GROUP BY date, paying_customer
    ) b ON a.date = b.date 
    WHERE a.total_downloads > b.total_downloads
    ORDER BY date;