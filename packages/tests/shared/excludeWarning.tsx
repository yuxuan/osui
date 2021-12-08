// eslint-disable-next-line no-console
const originError = console.error;

/** This function will remove `useLayoutEffect` server side warning. Since it's useless. */
export function excludeWarning() {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation((msg, ...rest) => {
        if (String(msg).includes('useLayoutEffect does nothing on the server')) {
            return;
        }
        originError(msg, ...rest);
    });

    return () => {
        errorSpy.mockRestore();
    };
}

export default function excludeAllWarning() {
    // eslint-disable-next-line @typescript-eslint/init-declarations, @typescript-eslint/ban-types
    let cleanUp: Function;

    beforeAll(() => {
        cleanUp = excludeWarning();
    });

    afterAll(() => {
        cleanUp();
    });
}
