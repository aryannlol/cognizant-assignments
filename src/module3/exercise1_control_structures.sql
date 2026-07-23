SET SERVEROUTPUT ON;

BEGIN
FOR customer IN (
        SELECT CustomerID, Name, Balance
        FROM Customers
    )
    LOOP
        IF customer.Balance > 10000 THEN
            DBMS_OUTPUT.PUT_LINE(
                customer.Name || ' is eligible for VIP status.'
            );
END IF;
END LOOP;
END;
/