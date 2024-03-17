import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

describe('button', () => {
    test('with only first params', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });

    test('Clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button >)
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug()
    })
});
