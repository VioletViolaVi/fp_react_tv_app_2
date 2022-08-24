/**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 
 import Header from '.';
import ShowCard from '.';

 describe("ShowCard", () => {

    beforeEach(() => {
        render(<ShowCard data={{ summary: "Test description", name: "Test name"}}/>)
    })

    it("Displays the appropriate description", () => {

        const desc = screen.queryByRole("paragraph");

        expect(desc).toBeInTheDocument();
        expect(desc.textContent).toBe("Test description");

    })

    it("Doesn't display an image element when no image is provided.", () => {

        const image = screen.queryByRole("img");

        expect(image).not.toBeTruthy();

    })

    it("Changes the FavouriteButton's class on click", async () => {

        const button = screen.queryByRole("button");

        expect(button.getAttribute("class")).toBe("");

        await userEvent.click(button);

        expect(button.getAttribute("class")).toBe("saved");
    })

 })