import CustomGeometry from '@/components/CustomGeometry'
import { store } from '@/redux/store'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import { Provider } from 'react-redux'
import { describe } from 'vitest'

describe('CustomGeometry test', () => {
  it('should render CustomGeometry correctly', async () => {
    const renderer = await ReactThreeTestRenderer.create(
      <Provider store={store}>
        <CustomGeometry />
      </Provider>
    )

    expect(renderer).toBeDefined()
    expect(renderer.scene.children.length).toBeGreaterThan(0)
  })
})
