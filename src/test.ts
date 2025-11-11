import {validateUser} from './index.js'
export function runTests() {
  let passed = 0
  let failed = 0

  
  function test(name: string, condition: boolean) {
    if (condition) {
      console.log(`✅ ${name}`)
      passed++
    } else {
      console.log(`❌ ${name}`)
      failed++
    }
  }
  console.log('Running is_object tests...\n')

  test('validateUser accepts a valid user', validateUser({ 
    id: 1, 
    name: 'Alice', 
    roles: ['admin', 'user'], 
    email: 'alice@example.com' 
  }))
  test('validateUser rejects when required field is missing',!validateUser({ 
    name: 'Bob', 
    roles: ['guest'] 
  }))
  test('validateUser rejects when roles contain invalid value',!validateUser({
    id: 2, 
    name: 'Eve', 
    roles: ['superuser'] 
  }))
  console.log(`\nTest Results: ${passed} passed, ${failed} failed`)
  if (failed === 0) {
    console.log('🎉 All tests passed!')
    return true
  } else {
    console.log('💥 Some tests failed!')
    return false
  }
}
if (import.meta.main) {
  runTests()
} 
 