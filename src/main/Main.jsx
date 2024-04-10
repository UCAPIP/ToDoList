import Day from "./day/Day";


export default function Main(){
    return(
        <main className="container mx-auto">
            <h2 className="text-center">Дни недели</h2>
            <div className="flex flex-row text-center">
                <Day day={"Понедельник"}/>
                <Day day={"Вторник"}/>
                <Day day={"Среда"}/>
                <Day day={"Четверг"}/>
                <Day day={"Пятница"}/>
                <Day day={"Суббота"}/>
                <Day day={"Воскресенье"}/>
            </div>
        </main>
    )
}