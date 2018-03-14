var mongoose = require('mongoose');

// Create a new schema for our journal entry data
var schema = new mongoose.Schema({
  date:{
    type: Date,
    default: Date.now,
    required: true
  },

  writtenBy: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  sentiment: {
    type: mongoose.Schema.Types.Any
  }
});
//create a custom query method to return entries based on desired fields. only required field is writtenBy
//you only need to get the entries written by the right person
/*
query parameter formatting:
{
writtenBy:
date:
sentiment:
}
*/
schema.statics.getEntries = function(queryBuild, skip, callback) {
  let query = {
    writtenBy: queryBuild.writtenBy
  }
  let entries = [];
  query.date = (queryBuild.date ? queryBuild.date : null);
  query.sentiment = (queryBuild.sentiment ? queryBuild.sentiment : null);
  Entry.find(query).sort({date: 'desc'}).exec(function(err, docs){
    if(err){
      console.error(err);
    }
    //passes the information into the callback function so that you can do whatever you want with it.
    if(!err){
      entries = docs;
      callback(entries);
    }
  })
}
//get all
schema.statics.getAll = function(empty, skip, callback) {
  let entries = [];
  Entry.find({}).sort({date: 'desc'}).exec(function(err, docs){
    if(err){
      console.error(err);
    }
    //passes the information into the callback function so that you can do whatever you want with it.
    if(!err){
      entries = docs;
      callback(entries);
    }
  })
}

// Return an Entry model based on the define schema
module.exports = Entry = mongoose.model('Entry', schema);
