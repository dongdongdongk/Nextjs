export default function MealLayout({ children }) {
    return (
        <>
            <h1>Meals Layout</h1>
            <p>This is the layout for meals.</p>
            <p>Here you can navigate to different meal-related pages.</p>
            {children}
        </>
    );
}