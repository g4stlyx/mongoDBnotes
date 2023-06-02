/*

Db design (theoritical info, check the course)


1-1 Relationships (ör: bir user sadece bir adrese sahip olabilir, and vice versa)

referencing: users ve address' olarak 2 collection var, users'dan "id" çekip o id'ye referansı ile addresses'dan adres çekiliyor
2 collection'a sorgu gönderildiği için görece verimsiz 

embedding documents: users içinde address:{} var, tek collection'dan iki bilgiye de ulaşmış oluyoruz
belli verileri çok fazla alıp diğerlerini çok az alıyorsak bu yöntem çok sağlıklı değil. 

ör: movies db'i var ve biz title,year'ı çok fazla kullanıyorsak 
diğer bilgilere ihtiyacımız olmamasına rağmen onları da çekmiş oluyoruz)
çözümü movie ve movie_details olarak iki collection açıp sürekli çektiğimiz verileri movie'ye koymak 
ve bu iki collection'ı movie_id ile bağlamak




1-M Relationships (ör: bir user birden fazla adrese sahip olabilir, bir adres sadece bir user'a ait olabilir)

referencing: users ve address' olarak 2 collection var, iki collection birbirine user_id ile bağlanıyor,
bir user_id birden fazla adreste kullanılabiliyor.

embedding documents: users içinde addresses array'i var, user'ın sahip olduğu tüm adresler bu array'in içinde tek collection'da
bu adreslere çok kez erişiliyorsa sağlıklı yöntem bu, az erişiliyorsa yukarıdaki.

ör: hepsiburada'da bir ürünün dokümanını düşün. çok fazla review'e sahip olacak dosya çok büyüyecek, 
bu yüzden product'a sadece 20 review dahil edilir, kullanıcıların çoğu buna bakar, 
diğer reviews ayrı bir collection olarak tutulur, kullanıcı isterse bu reviews'den veri çekilir.
bu iki collection products ve reviews olarak ayrılıp product_id ile bağlanabilir. (subset pattern)




ör: publisher-book
bir yayınevinin birden fazla kitabı olacaktır, ama bir kitap sadece bir yayınevinden basılır

embedding publisher: kitapların içine publisher konulabilir.
kitabın bilgisini alırken otomatik olarak yayınevinin bilgilerini de almış oluyoruz.

sorunları:
1- aynı publisher'ı sürekli tekrar tekrar yazmış oluyoruz, gereksiz veri depoluyoruz.
2- publisher'ın bilgisi değişirse, tek tek tüm kitaplardan bu bilgiyi değiştirmemiz gerekiyor.

Çözüm:
publishers ve books adlı iki collection oluşturulur, 
publishers'ın içinde books adlı bir array'de kitapların id'leri depolanır,
books içinde publisher_id'leri ref olarak tutulur, sadece bir kitabın publisher'ının verisi gerekiyorsa 2 sorgu atılır.





















*/