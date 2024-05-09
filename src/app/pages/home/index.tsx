import { Fragment } from "react"

function HomeScreen() {

    const courses = [
        {
            url: "https://media.whizlabs.com/website/g4.webp",
            name: "Microsoft"
        },
        {
            url: "https://media.whizlabs.com/website/g5.webp",
            name: "Java"
        },
        {
            url: "https://media.whizlabs.com/website/g1.webp",
            name: "Cloud"
        },
        {
            url: "https://media.whizlabs.com/website/g3.webp",
            name: "Security"
        },
        {
            url: "https://media.whizlabs.com/website/g7.webp",
            name: "Ver todos"
        }
    ]

    return (
        <div className="px-48 py-10">
            <div className="flex rounded-2xl h-80">
                <div className="flex flex-col">
                    <span className="font-semibold text-4xl leading-5">Boas vindas! Vamos estudar?</span>
                    <span className="font-light text-base mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque fuga perferendis numquam voluptatem debitis officiis quam cumque libero minima consequatur vero, natus quibusdam temporibus, corporis illo nulla veniam sint.</span>
                    <div>
                        <button>Continuar estudando</button>
                        <button>Explorando catalago de cursos</button>
                    </div>

                </div>
                <img src="https://www.whizlabs.com/images/whizlabs-it-certifications-training.webp" alt="people" width={622} height={622}/>
            </div>

            <div>
                <span className="text-6xl font-semibold">Explore nossos cursos disponíveis!</span>
                <div className="flex justify-evenly items-center mt-10">
                    {courses.map(el => (
                        <div className="flex flex-col items-center justify-center">
                            <div className="p-10 bg-slate-100 rounded-2xl flex items-center justify-center h-36 w-36">
                                <img src={el.url} alt="java" />
                            </div>

                            <span className="mt-2">{el.name}</span>
                        </div>
                    ))}


                </div>

            </div>
        </div>
    )
}

export { HomeScreen }