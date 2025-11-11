import {run} from '@yigal/watch_runner'
void run({
  cmd:'npx ts-json-schema-generator --path "src/my_types.ts" > generated/my_types.schema.json',
  watchfiles:[
    'src/my_types.ts',
    'package.json',
    'tsconfig.json'
  ]
})  
