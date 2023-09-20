import '@testing-library/jest-dom'
import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react'
import Navbar from '../components/Navbar.tsx'

describe('Navbar', () => {
    it('Navbar renders with correct options', () => {
        const defaultSelectedType = {name: 'water'};
        render(<Navbar selectedType={defaultSelectedType} filterCallback={() => {
        }}/>)
        expect(screen.getByText('Pokedex')).toBeInTheDocument();
        expect(screen.getAllByRole('option').length).toBe(18);
    });

    it('Navbar is rendering consistently with same default value', () => {
        const defaultSelectedType = {name: 'water'};

        // Render the Navbar component with the default selected type
        render(<Navbar selectedType={defaultSelectedType} filterCallback={() => {
        }}/>);
        const activeType = screen.getByTestId('type-selector')
        expect(activeType).toMatchSnapshot()

    })

    it('Default navbar option is water', () => {
        const defaultSelectedType = {name: 'water'};

        // Render the Navbar component with the default selected type
        render(<Navbar selectedType={defaultSelectedType} filterCallback={() => {
        }}/>);

        // Find the select element by its ID
        const selectElement = screen.getByTestId('type-selector');

        // Assert that the selected value of the select element matches the defaultSelectedType
        expect(selectElement).toHaveValue(defaultSelectedType.name);

    })
});
