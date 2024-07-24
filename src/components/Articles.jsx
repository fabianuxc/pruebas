import { useState } from "react";
import { Article } from "./Article";

let nextId = 0;
export function Articles() {

    const [articles, setArticles] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>

            {
                articles.map(article => (
                    <>
                        <Article
                            title={article.title}
                            description={article.description}
                        />
                        <button onClick={() => {

                            console.log(article.id)

                            setArticles(
                                articles.filter(a =>
                                    a.id !== article.id
                                )
                            )
                        }}>
                            Eliminar
                        </button>
                    </>
                ))
            }

            <input value={title}
                placeholder="Introduce un título"
                onChange={e => setTitle(e.target.value)}
                required />

            <textarea value={description}
                placeholder="Introduce una descripción"
                onChange={e => setDescription(e.target.value)}
                required />


            <button onClick={() => {
                setArticles([
                    ...articles,
                    { id: nextId++, title: title, description: description }
                ]);
                setTitle('');
                setDescription('');
            }
            }>
                Añadir artículo
            </button>


        </>
    )
}