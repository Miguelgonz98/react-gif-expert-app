import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/*titulo*/}
            <h1>Gif Expert App</h1>

            {/*input*/}
            <AddCategory
                /*setCategories={setCategories}*/
                onNewCategory={onAddCategory}>
            </AddCategory>

            {/*listado de gif*/}
            {categories.map((category) => {
                return (
                    <GifGrid key={category} category={category} />
                )
            })
            }
        </>
    )
}
