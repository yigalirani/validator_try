import { validate, zod_validate } from './index.js';
import { run_tests } from '@yigal/base_types';
function double_validate(input) {
    const ans = zod_validate(input);
    const ans2 = validate(input);
    if (ans !== ans2)
        throw 'mismatch';
    return ans;
}
if (import.meta.main) {
    void run_tests({ k: 'empty', f: () => double_validate({}) }, { k: 'array', v: false, f: () => double_validate([]) }, { k: 'one with no vals', f: () => !double_validate({
            a: {}
        }) }, { k: 'no watch', v: false, f: () => double_validate({
            a: {
                cmd: 'sdsds'
            }
        }) }, { k: 'no cmd', v: false, f: () => double_validate({
            a: {
                watch: 'sdsds'
            }
        }) }, { k: 'full', f: () => double_validate({
            a: {
                cmd: 'sdsds',
                watch: ['ere']
            }
        }) }, { k: 'extra val', v: false, f: () => double_validate({
            a: {
                cmd: 'sdsds',
                watch: ['ere'],
                l: 'sd'
            }
        })
    });
}
