export default function Test() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <div>
            {ingredientsListItems}
        </div>
    )
}

/**
 * Review Challenge:
 * Map over the list of ingredients and render them as list items
 * 
 * Note: We're doing things a weird way here. Don't worry,
 * we're building up to learning the right way 🙂
 */