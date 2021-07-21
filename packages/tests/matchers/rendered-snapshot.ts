import {render} from 'enzyme';
import {ReactElement} from 'react';

export default function toMatchRenderedSnapshot(
    this: jest.MatcherUtils,
    jsx: ReactElement<unknown>
): {pass: boolean, message(): string} {
    try {
        expect(render(jsx)).toMatchSnapshot();

        return {
            message: () => 'expected JSX not to match snapshot',
            pass: true,
        };
    } catch (e) {
        return {
            message: () => `expected JSX to match snapshot: ${e.message}`,
            pass: false,
        };
    }
}
