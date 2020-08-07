import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});


test("form shows success message on submit with form details", async () => {
    const { getByLabelText, getByText, getByRole, getByTestId, debug } = render(
      <CheckoutForm />
    );

    // query for the different inputs//
    const firstName = getByLabelText(/first name/i);
    await userEvent.type(firstName, "Ariana");
    expect(firstName).toHaveValue("Ariana");

    const lastName = getByLabelText(/last name/i);
    await userEvent.type(lastName, "Habas");
    expect(lastName).toHaveValue('Habas')

    const address = getByLabelText(/address/i);
    await userEvent.type(address, "801 van white");
    expect(address).toHaveValue('801 van white')
    // debug()
    const city = getByLabelText(/city/i);
    await userEvent.type(city, "msp");
    expect(city).toHaveValue('msp')

    const state = getByLabelText(/state/i);
    await userEvent.type(state, "mn");
    expect(state).toHaveValue('mn')

    const zip = getByLabelText(/zip/i);
    await userEvent.type(zip, "55411");
    expect(zip).toHaveValue('55411')

    // query for the submit button
    const submitBtn = getByRole("button", { name: /checkout/i });

     // click on the submit button
    fireEvent.click(submitBtn);

    // make our assertions
    expect(getByText(/Ariana/i)).toBeInTheDocument();
    debug()

 });
