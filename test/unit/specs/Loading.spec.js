/**
 * Created by hqq on 2017/3/3.
 */
import Loading from 'components/loading'
import { destroyVM, createTest } from '../utils'
describe('Loading.vue', () => {
  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('renders correctly with different props', () => {
    vm = createTest(Loading, {show: true})
    expect(vm.$el.classList.contains('zzyp-loading')).to.be.true
  })
})
