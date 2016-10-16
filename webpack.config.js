 var port = process.env.PORT || 3000;

var lessons = [
  "01 - The Single Immutable State Tree",
  "02 - Describing State Changes with Actions"
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



// module.exports = {
//   entry: {
//     "07-child-properties": './lessons/07-child-properties/main.js',
//     "04%20Properties": './lessons/04 Properties/main.js',

//   },
//   output: {
//     path: './lessons/',
//     filename: "[name]/index.js",
//     publicPath: '/'
//   },
//   devServer: {
//     inline: true,
//     contentBase: './lessons/',
//     port: port
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   }
// };
