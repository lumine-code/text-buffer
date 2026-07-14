const originalIt = global.it
const originalBeforeEach = global.beforeEach

global.it = (description, spec, timeout) =>
  originalIt(description, wrapAsyncCallbackSpec(spec), timeout)

global.beforeEach = (spec, timeout) =>
  originalBeforeEach(wrapAsyncCallbackSpec(spec), timeout)

function wrapAsyncCallbackSpec (spec) {
  if (spec.constructor.name !== 'AsyncFunction' || spec.length === 0) return spec

  return function (done) {
    spec.call(this, done).catch(done.fail)
  }
}
