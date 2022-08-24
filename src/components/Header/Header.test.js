/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '.';

describe("Header component", () => {

    it("Displays an H1 with appropriate text", () => {

        render(<BrowserRouter><Header /></BrowserRouter>);

        const heading = screen.queryByRole("heading");

        expect(heading).toBeInTheDocument();

    })

})