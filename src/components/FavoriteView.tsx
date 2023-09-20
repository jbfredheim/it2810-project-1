import {useEffect} from 'react'

interface FavoriteViewProps {
    shouldUpdate: boolean;
}

export const FavouriteView = ({shouldUpdate}: FavoriteViewProps) => {

    let data: Array<{ name: string }> = [];
    if (localStorage.data) {
        const stored_data = localStorage.getItem("data");
        if (stored_data) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data = JSON.parse(stored_data)
        }
    }
    const listItems = data.map((d: { name: string }, index) => <li key={index}>{d.name}</li>);

    useEffect(() => {

    }, [shouldUpdate])

    if (!data) {
        return ("")
    }

    return (
        <div>
            <h3>Favourites</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    );
};