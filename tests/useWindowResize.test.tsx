import { act, renderHook, fireEvent } from '../src/Helper/testHelper';
import { useWindowResize } from '../src/Helper/useWindowResize';
const customGlobal: any = global;

describe('Navigation component renders correctly on and above desktop', () => {
  beforeEach(() => {
    customGlobal.innerWidth = 1024;
    customGlobal.innerHeight = 500;
    fireEvent(customGlobal, new Event('resize'));
  });

  it('reads initial innerWidth and innerHeight values from window', () => {
    const { result } = renderHook(() => useWindowResize());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(500);
  });

  it('updates innerWidth and innerHeight values when window resizes', () => {
    const { result } = renderHook(() => useWindowResize());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(500);

    act(() => {
      customGlobal.innerWidth = 320;
      customGlobal.innerHeight = 1000;

      fireEvent(customGlobal, new Event('resize'));
    });

    expect(result.current.width).toBe(320);
    expect(result.current.height).toBe(1000);
  });
});
