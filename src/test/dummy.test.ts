import 'mocha'
import sinon, { SinonSpy  } from 'sinon'
import 'should'

import sleep from '../core/sleep'

describe('Dummy test case', (): void => {
    it('Should do nothing asynchronously', async (): Promise<void> => {
        await sleep(10)
        const spy: SinonSpy<string[], void> = sinon.stub()
        const arg = 'hello world'
        spy(arg)
        sinon.assert.calledOnce(spy)
        typeof(spy).should.be.a.type('function')
    })
})
