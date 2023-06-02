/*

show dbs; > to see databases

db; > to see current db

use db_name; > to switch current db as "db_name"
if there's no db named "db_name", creates one and switches to it

show collections; > to see collections

db.createCollection("courses"); > to create a collection named "courses"
db.courses.drop(); > to delete the collection named "courses"

db.dropDatabase(); > to delete a database

--------------------------------------------------------------------

Db'e veri girme

db.collectionName.insertOne($data) > to add data to the current db
db.collectionName.insertMany($data) > to add more than a piece of data at one time

--------------------------------------------------------------------

Db sorgulama, filtreleme

db.collectionName.find().pretty() > to output all of the data of the chosen collection 
use .pretty() for it to seem better

db.collectionName.find().count() > to output how many pieces of data there are

db.collectionName.findOne() > outputs the first data it finds

db.instructors.find({},{name:1,rating:1}).pretty() > outputs only ids,names,ratings of the instructors
db.instructors.find({},{courses:0}).pretty() > outputs every info except courses of the instructors

db.instructors.find({status:"B"}) > status'ı B olanları yazdır

db.instructors.find({courses: "Kotlin"}) > courses'ının içinde Kotlin olanları yazdır

db.instructors.find({status:"A",courses:"Java"}) > hem status'ı A olsun hem Java öğretsin

db.instructors.find({rating: {$gt: 4.5}}) > rating'i 4.5 üstü olsun

db.instructors.find({rating: {$gte: 4.5}}) > rating'i 4.5 veya üstü olsun

--------------------------------------------------------------------

Updating db and deleting data

db.instructors.updateOne({name:"Mustafa Murat Coşkun"},{$set: {rating:4.6}}) > ismi girili elemanın rating'ini 4.6 yapar
db.instructors.updateMany({},{$set: {student:10000}}) > tüm elemanların student sayısını 10k yapar

db.instructors.deleteOne({name:"Mustafa Murat Coşkun"}) > verilen özellikteki 1 elemanı siler
db.instructors.deleteMany({status:"A"}) > seçili özellikteki her elemanı siler, özellik verilmezse her şeyi siler

--------------------------------------------------------------------

Skip,Limit,Sort methods

db.instructors.find().skip(1).pretty() > 1. id'den itibaren tüm kayıtları yazdırır

db.instructors.find().limit(2).pretty() > en baştan başlayarak 2 kayıt getir

db.instructors.find().skip(1).limit(2) > 1. id'den başlayarak 2 kayıt getir

db.instructors.find({},{rating:1}).sort({rating:1})
find'ın içinde sadece rating'leri istediğimizi,
sort'un içinde de rating'leri küçükten büyüğe sıralamasını söyledik
rating:-1 yapılırsa büyükten küçüğe gelir
string değerleri alfabetik sıralamaya da yarıyor

--------------------------------------------------------------------

**Aggregation - belli alanlara göre elemanları gruplama
bir tık karışık dikkat

db.products.aggregate([{$group: {_id: "$category", num_products: {$sum: 1}}}]) 

aggregate içindeki group operatörü sınıflandırmaya yarıyor
_id: ile neye göre gruplandıracağımızı seçtik
sum operatörü ile de her kategorinin kaç elemanı olduğunu öğrendik

db.products.aggregate([{$group: {_id: "$category", average_price: {$avg: "$price"}}}]) 
her kategorinin ortalama ücretini öğrenmek için

db.products.aggregate([{$group: {_id: "$category", max_price: {$max: "$price"}}}]) 
her kategori içinde en yüksek fiyatlı ürünün fiyatını öğrenmek için

böyle bir sürü operatör var, ihtiyacın oldukça bak dökümanlardan

--------------------------------------------------------------------






















*/










