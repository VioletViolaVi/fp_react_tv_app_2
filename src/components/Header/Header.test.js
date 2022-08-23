/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Header from '.';

describe("Header component", () => {

    it("Displays an H1 with appropriate text", () => {

        render(<Header />);

        const heading = screen.queryByRole("heading");

        expect(heading).toBeInTheDocument();

    })

})