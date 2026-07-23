SET SERVEROUTPUT ON;

-- Exercise 3 - Scenario 1
-- Process Monthly Interest for Savings Accounts

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
UPDATE Accounts
SET Balance = Balance + (Balance * 0.01)
WHERE AccountType = 'Savings';

COMMIT;

DBMS_OUTPUT.PUT_LINE('Monthly interest applied successfully.');
END;
/

-- Execute Procedure
BEGIN
    ProcessMonthlyInterest;
END;
/