import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name:/i);
    const lastName = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zipCode = screen.getByLabelText(/zip:/i);
    const checkoutButton = screen.getByRole('button');

    userEvent.type(firstName, 'Alejandro');
    userEvent.type(lastName, 'Vasquez');
    userEvent.type(address, '1221 Busher Dr');
    userEvent.type(city, 'Norstown');
    userEvent.type(state, 'Wakanda');
    userEvent.type(zipCode, '43698');
    userEvent.click(checkoutButton);

    const successMessage = document.querySelector('.success-message');
    
    expect(successMessage).toBeInTheDocument();
});
