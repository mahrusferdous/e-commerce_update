import axios from "axios";
import { render, waitFor } from "@testing-library/react";
import Product from "../src/components/Product";
import "@testing-library/jest-dom";

jest.mock("axios");

describe("Product", () => {
    test("fetch data from an API", async () => {
        const mockResponse = {
            data: [
                {
                    name: "product1",
                    product_id: 1,
                    price: 100,
                },
                {
                    name: "product2",
                    product_id: 2,
                    price: 200,
                },
            ],
        };

        // Mocking axios.get to return the mockResponse
        axios.get.mockResolvedValueOnce(mockResponse);

        // Rendering the component
        const { getByText } = render(<Product />);

        // Waiting for the component to render with the data
        await waitFor(() => {
            // Assertions to check if product names are present
            expect(getByText("product1")).toBeInTheDocument();
            expect(getByText("product2")).toBeInTheDocument();
        });

        // Assertion to check if axios.get was called with the correct URL
        expect(axios.get).toHaveBeenCalledWith("http://127.0.0.1:5000/products");

        // Assertion to check if axios.get was called only once
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
});
