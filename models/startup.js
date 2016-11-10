var mongoose = require('mongoose');
mongoose.connect('mongodb://startup:adsqh!007@ds023603.mlab.com:23603/startup');
var Schema = mongoose.Schema;

var startupSchema = new Schema(
  {
   Id:Number,
   Name:String,
   StartupLink: String,
   ImageUrl: String,
   DescriptionStartup: String,
   Link: String,
   TwitterLink: String,
   GithubLink: String,
   FacebookLink: String,
   LinkedinLink: String,
   AngelLink: String,
   DescriptionProduct: String,
   LinkVideo: String,
   Founder: String,
   Location: String
  }
);

startupSchema.methods.nameandlink = function() {
  this.Name = this.Link + this.Link;
  return this.Name;
}

startupSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.Location = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.Location)
    this.Location = currentDate;
  next();
});

var Startup = mongoose.model('Startup', startupSchema);
module.exports = Startup;
