import {validate,zod_validate} from './index.js'
function run_tests(tests: Record<string, () => boolean>): void {
  let passed = 0
  let failed = 0

  for (const [name, fn] of Object.entries(tests)) {
    try {
      const result = fn()
      if (result) {
        console.log(`✅ ${name}`)
        passed++
      } else {
        console.error(`❌ ${name}`)
        failed++
      }
    } catch (err) {
      console.error(`💥 ${name} threw an error:`, err)
      failed++
    }
  }
  console.log(`\nSummary: ${passed} passed, ${failed} failed.`)  
}
function double_validate(input:unknown){
   const ans=zod_validate(input)
   const ans2=validate(input)
   if (ans!==ans2)
    throw 'mismatch'
  return ans
}

if (import.meta.main) {
  run_tests({
    'empty should not fail':()=>double_validate({}),
    'array should fail':()=>!double_validate([]),
    'one with no vals':()=>!double_validate({
      a:{
      }
    }),
    'no watch':()=>!double_validate({
      a:{
        cmd:'sdsds'
      }
    }),
    'no cmd':()=>!double_validate({
      a:{
        watch:'sdsds'
      }
    }),
    'full':()=>double_validate({
      a:{
        cmd:'sdsds',
        watch:['ere']
      }
    }),
    'extra val':()=>!double_validate({
      a:{
        cmd:'sdsds',
        watch:['ere'],
        l:'sd' 
      }
    })
  })
} 
 