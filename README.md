# Youtube Link To Demo: 
 [WANDERER]( https://youtu.be/Nq00RQAPJc4 )
  
  For running this project in local kindly refer installation section.

## UML Diagram:
![UML](https://i.imgur.com/AB94NWV.jpg)
## Sequence Diagram:
## System To API
![SystemToAPI](https://i.imgur.com/2BqGnNL.jpg)
## Domain Objects To User
![DomainObjectsToUser](https://i.imgur.com/D8apJ9V.jpg)
## User To User
![UserToUser](https://i.imgur.com/6Cf1Dh7.jpg)
## Domain Objects
![DomainObjects](https://i.imgur.com/oQUOVbJ.jpg))

## 3 potential domain objects
1. Airlines
2. Hotels
3. Bookings

## 3 potential human users
1. Website administrator
2. Vendor
    Airline
    Hotel
    Client
3. Guest
    Member
    

## 3 goals the user could accomplish ( For each human user)
1. Member -: Book airline, Book Hotel, Check Orders, browse, cancel the order    
2. Web administrator-: Remove vendors, add new vendors
3. Guest-: Browse, Register, 
4. Vendor-: add new airline/hotel, change details.

## 2 relations with other users(For each human user):
1. Vendors provide services to Clients. 
2. Clients book tickets via Vendors.  

## 2 relations with domain objects (For each human user):
1. Member book tickets from a vendor and will have orders associated with it. 
2. Guest will browse airline tickets.

## 2 relations with other domain objects
1. There exists an order for an airline from a vendor.
2. There exists an order for a hotel from a vendor.


## Installation
The application is built on MERN(MongoDB, Express.js, React.js, Node.js) stack.

### Getting application up and running: 

#### Running elastic cluster:
[Follow to run elastic cluster](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-install.html)

#### Running mongo database:
[Follow to run mongoDb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

#### Prerequisites:
Elastic cluster should be up and running. The hosted url should be same as specified value of ELASTICSEARCH_URI in .env file.
MongoDb should be up and running. The hosted url should be same as specified value of MONGODB_URI in .env file.

1. Run ``npm install`` in root directory.
2. Run ``npm install`` in client directory.
3. Run ``npm start`` on root directory.

The application should be up and running on the browser. The server will also start in parallel.
There are several API exposed by backend for CRUD, Search and other features. The same can be tested by
importing postman collection and environment in folder testing collection.

To initialize your application with some data kindly fire up below endpoints from a client.
[Initialize all indexes with airports, flights and hotels data]({{host}}/bookingsApp/elastic/index/init/all)
[Initialize mongo database with airports, flights and hotels data]({{host}}/bookingsApp/elastic/index/init/db)

Kindly use below url to delete all indexes:
[Delete all indexes from Elastic search]({{host}}/bookingsApp/elastic/delete_all)
