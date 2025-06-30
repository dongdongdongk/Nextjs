// localhost:3000/meals/something
export default function MealDetailPage({ params }) {
    const { mealSlug } = params;

    return (
        <>
            <h1>Meal Detail</h1>
            <p>Details for meal: {mealSlug}</p>
            <p>This page will show details for the meal with the slug: {mealSlug}.</p>
        </>
    );
}