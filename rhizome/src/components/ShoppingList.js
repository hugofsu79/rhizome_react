const plantlist = [
    'monstera',
    'ficus lyrata',
    'yucca',
    'palmier'
]

function ShoppingList() {
    return (
        <ul>
            {plantlist.map((plant) =>
                <li>{plant}</li>)}
        </ul>
    )
}
export default ShoppingList