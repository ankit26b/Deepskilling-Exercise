CREATE TABLE customers (
    customer_id     NUMBER PRIMARY KEY,
    name            VARCHAR2(100),
    age             NUMBER,
    balance         NUMBER(10, 2),
    isVIP           VARCHAR2(5) DEFAULT 'FALSE'
);

CREATE TABLE loans (
    loan_id         NUMBER PRIMARY KEY,
    customer_id     NUMBER,
    interest_rate   NUMBER(5, 2),
    due_date        DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);


INSERT INTO customers (customer_id, name, age, balance)
VALUES (1, 'Ankit', 65, 12000.00);

INSERT INTO customers (customer_id, name, age, balance)
VALUES (2, 'Aman', 45, 8000.00);

INSERT INTO customers (customer_id, name, age, balance)
VALUES (3, 'Ram', 70, 15000.00);


INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (101, 1, 5.5, SYSDATE + 15);

INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (102, 2, 6.0, SYSDATE + 45);

INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (103, 3, 7.0, SYSDATE + 5);

COMMIT;

--1

BEGIN
  FOR rec IN (
    SELECT l.loan_id
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
    WHERE c.age > 60
  )
  LOOP
    UPDATE loans
    SET interest_rate = interest_rate - 1
    WHERE loan_id = rec.loan_id;
  END LOOP;

  COMMIT;
END;

select * from LOANS;

--2 

BEGIN
  FOR rec IN (SELECT customer_id FROM customers WHERE balance > 10000)
  LOOP
    UPDATE customers
    SET isVIP = 'TRUE'
    WHERE customer_id = rec.customer_id;
  END LOOP;

  COMMIT;
END;

select * from CUSTOMERS;

--3

BEGIN
  FOR rec IN (
    SELECT l.loan_id, l.due_date, c.name
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
  )
  LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || rec.name || ', your loan (ID: ' || rec.loan_id || ') is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;