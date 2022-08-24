/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import SearchPage from '.';

describe("SearchPage", () => {

    it("Displays no shows if none are found", async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [] });

        render(<BrowserRouter><SearchPage /></BrowserRouter>)

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))

        const cards = screen.queryByRole("figure");
        expect(cards).toBe(null);
    })

    it("Displays 3 shows if 3 are found", async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [
            {show: {id: 1, name: "A", summary: "A"}},
            {show: {id: 2, name: "A", summary: "A"}},
            {show: {id: 3, name: "A", summary: "A"}}]})

        render(<BrowserRouter><SearchPage /></BrowserRouter>)

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))

        const cards = screen.getAllByRole("figure")
        expect(cards.length).toBe(3);
    })

})