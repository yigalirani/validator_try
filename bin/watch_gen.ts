import {run} from '@yigal/watch_runner'
void run({
  cmd:'npx typescript-json-schema src/my_types.ts * --out generated/my_types.schema.json ',
  watchfiles:[
    'src/my_types.ts',
    'package.json',
    'tsconfig.json'
  ]
})  
