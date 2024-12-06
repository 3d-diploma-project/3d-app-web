import Scene from '@/components/Scene'
import { store } from '@/redux/store'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import { Provider } from 'react-redux'
import { describe } from 'vitest'

vi.mock('@react-three/drei', () => ({
  OrbitControls: () => null,
  GizmoHelper: () => null,
  GizmoViewport: () => null,
  Wireframe: () => null,
  Center: ({ children }: { children: React.ReactNode }) => <>{children}</>
}))

describe('Scene test', () => {
  it('should render Scene correctly', async () => {
    const renderer = await ReactThreeTestRenderer.create(
      <Provider store={store}>
        <Scene />
      </Provider>
    )

    expect(renderer).toBeDefined()
    expect(renderer.scene.children.length).toBeGreaterThan(0)
  })
})
