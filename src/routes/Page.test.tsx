import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Page from './Page';

describe("Page test", () => {
    test("should show a customize title", () => {
        
        render(<Page title='Hello there' />, {wrapper: BrowserRouter})

        expect(screen.getByText(/Hello there/i)).toBeDefined()
    })

    test("should show a default fallback when title is not set", () => {
        render(<Page />, {wrapper: BrowserRouter})

        expect(screen.getByText(/Give me a title/i)).toBeInTheDocument()
    })
})

