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
    required: true,
    default: "Anonymous"
  },
  text: {
    type: String,
    required: true,
  },

  title:{
    type: String,
    required: true
  },
  sentiment: {
    type: mongoose.Schema.Types.Mixed,
    default: "neutral"
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
  let query = {}
  if(queryBuild.writtenBy){
    query.writtenBy = queryBuild.writtenBy
  }
  if(queryBuild.id){
    query._id = queryBuild.id
  }
  let entries = [];
  //programatically build your query, so you have the option of finding entries with whatever parameters you would like
  // query.date = (queryBuild.date ? queryBuild.date : null);
  // query.sentiment = (queryBuild.sentiment ? queryBuild.sentiment : null);
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
//get all3
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
schema.statics.deleteEntry = function(post_id, callback) {
  Entry.deleteOne( {_id: post_id}, function(err, confirm){
    if(err){
      console.error(err)
    }
    if(!err){
      //returns the confirmation object
      callback(confirm)
    }
  })
}
//the logic for adding a new entry
schema.statics.addEntry = function(new_entry, callback) {
  let doc = {
    date: Date()
  }
  // doc.writtenBy = (new_entry.writtenBy ? new_entry.writtenBy : "Anonymous");
  // doc.sentiment = (new_entry.sentiment ? new_entry.sentiment : "neutral");
  // doc.body = (new_entry.body ? new_entry.body : "Lorem ipsum");

  Entry.create(new_entry, function(err, confirm){
    if(err){
      console.error(err)
    }
    if(!err){
      //returns the confirmation object
      callback(confirm)
    }
  })
}
// Return an Entry model based on the define schema
module.exports = Entry = mongoose.model('Entry', schema);
