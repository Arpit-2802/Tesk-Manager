import NewTask from "./NewTask"
export default function Tasks(){

    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 my-4" >Tasks</h2>
            <NewTask />
            <p>This project does not have any Task</p>
            <ul>

            </ul>
        </section>
    )
}