# mongo
mongo/mongosh
exit
cls
show dbs
use testdb
db.course.insertOne({name:"Java"})
db.course.insertOne({name:"J1"})
db.course.insertOne({name:"J2"})
db.course.insertOne({name:"Angular"})
db.course.insertOne({name:"React"})
db.course.find().pretty()
db.course.find({name: "Java"}).pretty()
db.course.find({name: /^j/}).pretty()
show collections
