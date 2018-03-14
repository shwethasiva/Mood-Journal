require("source-map-support").install();
exports.id = 8;
exports.modules = {

/***/ "./src/data/models/mongodb/Entry.js":
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__("mongoose");

// Create a new schema for our journal entry data
var schema = new mongoose.Schema({
  date: {
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
schema.statics.getEntries = function (queryBuild, skip, callback) {
  let query = {
    writtenBy: queryBuild.writtenBy
  };
  let entries = [];
  query.date = queryBuild.date ? queryBuild.date : null;
  query.sentiment = queryBuild.sentiment ? queryBuild.sentiment : null;
  Entry.find(query).sort({ date: 'desc' }).exec(function (err, docs) {
    if (err) {
      console.error(err);
    }
    //passes the information into the callback function so that you can do whatever you want with it.
    if (!err) {
      entries = docs;
      callback(entries);
    }
  });
};
schema.statics.getAll = function (empty, skip, callback) {
  let entries = [];
  Entry.find(query).sort({ date: 'desc' }).exec(function (err, docs) {
    if (err) {
      console.error(err);
    }
    //passes the information into the callback function so that you can do whatever you want with it.
    if (!err) {
      entries = docs;
      callback(entries);
    }
  });
};

// Return an Entry model based on the define schema
module.exports = Entry = mongoose.model('Entry', schema);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy84LjRkNDNmNTJiZjA2MjA4NzZiNDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlja1xcRG9jdW1lbnRzXFxHaXRodWJcXE1vb2RKb3VybmFsXFxzcmNcXGRhdGFcXG1vZGVsc1xcbW9uZ29kYlxcRW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBzY2hlbWEgZm9yIG91ciBqb3VybmFsIGVudHJ5IGRhdGFcclxudmFyIHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGRhdGU6e1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG5cclxuICB3cml0dGVuQnk6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBib2R5OiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgc2VudGltZW50OiB7XHJcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuQW55XHJcbiAgfVxyXG59KTtcclxuLy9jcmVhdGUgYSBjdXN0b20gcXVlcnkgbWV0aG9kIHRvIHJldHVybiBlbnRyaWVzIGJhc2VkIG9uIGRlc2lyZWQgZmllbGRzLiBvbmx5IHJlcXVpcmVkIGZpZWxkIGlzIHdyaXR0ZW5CeVxyXG4vL3lvdSBvbmx5IG5lZWQgdG8gZ2V0IHRoZSBlbnRyaWVzIHdyaXR0ZW4gYnkgdGhlIHJpZ2h0IHBlcnNvblxyXG4vKlxyXG5xdWVyeSBwYXJhbWV0ZXIgZm9ybWF0dGluZzpcclxue1xyXG53cml0dGVuQnk6XHJcbmRhdGU6XHJcbnNlbnRpbWVudDpcclxufVxyXG4qL1xyXG5zY2hlbWEuc3RhdGljcy5nZXRFbnRyaWVzID0gZnVuY3Rpb24ocXVlcnlCdWlsZCwgc2tpcCwgY2FsbGJhY2spIHtcclxuICBsZXQgcXVlcnkgPSB7XHJcbiAgICB3cml0dGVuQnk6IHF1ZXJ5QnVpbGQud3JpdHRlbkJ5XHJcbiAgfVxyXG4gIGxldCBlbnRyaWVzID0gW107XHJcbiAgcXVlcnkuZGF0ZSA9IChxdWVyeUJ1aWxkLmRhdGUgPyBxdWVyeUJ1aWxkLmRhdGUgOiBudWxsKTtcclxuICBxdWVyeS5zZW50aW1lbnQgPSAocXVlcnlCdWlsZC5zZW50aW1lbnQgPyBxdWVyeUJ1aWxkLnNlbnRpbWVudCA6IG51bGwpO1xyXG4gIEVudHJ5LmZpbmQocXVlcnkpLnNvcnQoe2RhdGU6ICdkZXNjJ30pLmV4ZWMoZnVuY3Rpb24oZXJyLCBkb2NzKXtcclxuICAgIGlmKGVycil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICAgIC8vcGFzc2VzIHRoZSBpbmZvcm1hdGlvbiBpbnRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBzbyB0aGF0IHlvdSBjYW4gZG8gd2hhdGV2ZXIgeW91IHdhbnQgd2l0aCBpdC5cclxuICAgIGlmKCFlcnIpe1xyXG4gICAgICBlbnRyaWVzID0gZG9jcztcclxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5zY2hlbWEuc3RhdGljcy5nZXRBbGwgPSBmdW5jdGlvbihlbXB0eSwgc2tpcCwgY2FsbGJhY2spIHtcclxuICBsZXQgZW50cmllcyA9IFtdO1xyXG4gIEVudHJ5LmZpbmQocXVlcnkpLnNvcnQoe2RhdGU6ICdkZXNjJ30pLmV4ZWMoZnVuY3Rpb24oZXJyLCBkb2NzKXtcclxuICAgIGlmKGVycil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICAgIC8vcGFzc2VzIHRoZSBpbmZvcm1hdGlvbiBpbnRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBzbyB0aGF0IHlvdSBjYW4gZG8gd2hhdGV2ZXIgeW91IHdhbnQgd2l0aCBpdC5cclxuICAgIGlmKCFlcnIpe1xyXG4gICAgICBlbnRyaWVzID0gZG9jcztcclxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8gUmV0dXJuIGFuIEVudHJ5IG1vZGVsIGJhc2VkIG9uIHRoZSBkZWZpbmUgc2NoZW1hXHJcbm1vZHVsZS5leHBvcnRzID0gRW50cnkgPSBtb25nb29zZS5tb2RlbCgnRW50cnknLCBzY2hlbWEpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvbW9kZWxzL21vbmdvZGIvRW50cnkuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBZkE7QUFtQkE7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=