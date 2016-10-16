/*Insert single document (row) */
db.Employee.insert
(
	{
		"Employeeid" : 2,
		"EmployeeName" : "Digender",
                "age": 25
	}
)
        
 //find al data
 db.Employee.find();
 
        
 //find data with a field
db.Employee.findOne({"EmployeeName":"Digender"});   

//insert data wirth  an id
db.Employee.insert({_id:3, "EmployeeName" : "Smith"});

//comparision operator

db.Employee.find({Employeeid : {$gt:0,$lt:3}}).pretty();
db.Employee.find({Employeeid : {$gt:0,$lt:2}}).forEach(printjson);

//limit and sort
db.Employee.find({Employeeid : {$gt:0,$lt:3}}).sort({"Employeeid": -1}).limit(3).pretty();
db.Employee.find({Employeeid : {$gt:0,$lt:2}}).limit(1).forEach(printjson);


/*Cursor in Mongo DB*/

var myEmployee = db.Employee.find( { Employeeid : { $gt:2 }});

while(myEmployee.hasNext())
{

        print(tojson(myCursor.next()));

}

/*Cpont in mongodb*/

db.Employee.count();
db.Employee.find({age:25}).count();

/*Dlete document (row)*/

db.Employee.remove({age:25});

/*Update table*/

db.Employee.update(
    {
        "Employeeid" : 1
     },
     {
         $set: {
            "EmployeeName" : "Digender Mahara"
         }
      }
 );

/*Create a user and assign a password*/
      
      db.createUser(
      {
         user : "Digender Mahara",
         pwd: "password1",
         roles : [{
           role: "read" , db : "dj"
         },
         {
           role: "readWrite"  , db : "dj"
         }]
      });