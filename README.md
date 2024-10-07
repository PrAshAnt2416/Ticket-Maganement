Ticket Management System
What is this?
This is a simple Ticket Management System where you can create, read, update, and delete support tickets. It’s built using Node.js and MongoDB.

---What Can You Do?
Create new tickets
See all tickets
Get a ticket by its ID
Update tickets
Delete tickets

----What You Need
Node.js (make sure it's version 14 or higher)
MongoDB (you can use it on your computer or onlin


----API Endpoints
Base URL
http://localhost:3000
Endpoints

--Create a Ticket

URL: /tickets
Method: POST
Body:
json
{
  "title": "Your Ticket Title",
  "description": "What’s wrong?",
  "status": "Open"  // optional
}
--Get All Tickets
URL: /tickets
Method: GET

--Get a Ticket by ID
URL: /tickets/:id
Method: GET

--Update a Ticket
URL: /tickets/:id
Method: PUT
Body:
json
{
  "title": "New Title",
  "description": "Updated Info",
  "status": "Closed"  // optional
}

--Delete a Ticket

URL: /tickets/:id
Method: DELETE

--Want to improve?
If you find any issues or want to improve this, feel free to make a suggestion or pull request. Everyone’s welcome!
