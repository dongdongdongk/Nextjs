'use client'

import { useFormState } from "react-dom"

export default function MealsFormSubmit({ onSubmit }) {
    const { pending } = useFormState

    return (
        <button disabled={pending}>
            {pending ? 'Sharing...' : 'Share Meal'}
        </button>
    );
}