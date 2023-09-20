import '@testing-library/jest-dom'
import {rest} from "msw";
import {setupServer} from "msw/node";

const restHandlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon/*', (_req, res, ctx) => {
        return res(
            ctx.json(
                {
                    name: "charizard",
                    abilities: ["a", "b"],
                    height: 17,
                    weight: 905,
                    sprites: {
                        front_default: ""
                    }
                }
            )
        )
    })
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({onUnhandledRequest: 'error'}))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())