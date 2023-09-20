import '@testing-library/jest-dom'
import {describe, it, expect} from 'vitest';
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import Pokeprofile from "../components/Pokeprofile.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";

describe('Pokeprofile', () => {
    it('Profile renders with mock request', async () => {
        const activePokemon = {name: 'charizard'};
        const queryClient: QueryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Pokeprofile pokemon={activePokemon}/>
            </QueryClientProvider>
        )
        await screen.findByTestId("fun-facts");
        expect(screen.getByTestId("profile-name")).toBeInTheDocument() //only displays after rest response
        expect(screen.getByText("90.5", {exact: false})).toBeInTheDocument()
    });
    it('Correct weight displayed for charizard', async () => {
        const activePokemon = {name: 'charizard'};
        const queryClient: QueryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Pokeprofile pokemon={activePokemon}/>
            </QueryClientProvider>
        )
        await screen.findByTestId("fun-facts");
        expect(screen.getByText("90.5", {exact: false})).toBeInTheDocument()
    });
});
