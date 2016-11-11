/*var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

    MongoClient.connect('mongodb://startup:adsqh!007@ds023603.mlab.com:23603/startup',
                        function(err,db) {
                          if(err){
                            throw err;
                          }
                          else {
                            console.log("Connected");
                          }
                          db.close();
                        });*/
var Startup = require('./models/startup');

var newStartup = new Startup(
  {
    Id:888,
    Name:'new startup1',
    Link:'facebook.com'
  }
);

/*newStartup.nameandlink(function(err,name) {
  if(err) throw err;
  console.log('new name: ' + name);
});

newStartup.save(function(err) {
  if(err) throw err;
  console.log('Startup saved successfully');
});*/
var startup = Startup.findOne({Id:3}, function(err, startup) {
  if(err)
  throw err;
  
});
