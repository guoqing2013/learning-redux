 var port = process.env.PORT || 3000;

var lessons = [
  "01 - The Single Immutable State Tree",
  "02 - Describing State Changes with Actions",
  "03 - Pure and Impure Functions",
  "04 - The Reducer Function",
  "05 - Writing a Counter Reducer with Tests",
  "06 - Store Methods: getState(), dispatch(), and subscribe()",
  "07 - Implementing Store from Scratch",
  "08 - React Counter Example",
  "09 - Avoiding Array Mutations with concat(), slice(), and ...spread",
  "10 - Avoiding Object Mutations with Object.assign() and ...spread",
  "11 - Writing a Todo List Reducer (Adding a Todo)",
  "12 - Writing a Todo List Reducer (Toggling a Todo)"
]

var entry = {}
lessons.forEach(function(lesson){
  var lessonKey = lesson.replace(/ /g, '%20');
  entry[lessonKey] = './lessons/' + lesson + '/main.js'
})

module.exports = {
  entry: entry,
  output: {
    path: './lessons/',
    filename: "[name]/index.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './lessons/',
    port: port
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2016', 'react']
        }
      }
    ]
  }
};


