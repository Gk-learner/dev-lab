import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Profile from "./Profile";
describe("UserProfile Component", () => {
    test("renders user profile with name and image", () => {
        render(<Profile />);
        const nameElement = screen.getByText("Jane Doe");
        const imageElement = screen.getByAltText("user-image");
        expect(nameElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
    }
    );
    test("toggles bio visibility when button is clicked", () => {
        render(<Profile />);
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        const bioElement = screen.getByText("Frontend developer who loves React and coffee ☕️");
        expect(bioElement).toBeInTheDocument();
        fireEvent.click(buttonElement);
        expect(bioElement).not.toBeInTheDocument();
    }
    );
});