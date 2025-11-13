import {run} from '@yigal/watch_runner'

 
void run({
  cmd:'node src/dist/test.js',
  title:'test',
  watchfiles:[
    'dist/test.js'
  ]
})
  