 var port = process.env.PORT || 3000;

var lessons = [
  "01 - The Single Immutable State Tree",
  "02 - Describing State Changes with Actions",
  "03 - Pure and Impure Functions",
  "04 - The Reducer Function",
  "05 - Store Methods: getState(), dispatch(), and subscribe()",
  "06 - Implementing Store from Scratch",
  "07 - React Counter Example",
  "08 - Avoiding Array Mutations with concat(), slice(), and ...spread",
  "09 - Avoiding Object Mutations with Object.assign() and ...spread",
  "10 - Writing a Todo List Reducer (Adding a Todo)",
  "11 - Writing a Todo List Reducer (Toggling a Todo)"
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
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};


