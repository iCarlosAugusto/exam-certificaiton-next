import { Fragment } from "react"

function HomeScreen() {
    return (
        <div className="px-48">
            <div className="flex bg-purple-300  rounded-2xl h-80">
                <div className="flex flex-col p-10">
                    <span className="font-semibold text-4xl text-white leading-5">Boas vindas! Vamos estudar?</span>
                    <span className="font-light text-base text-white mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque fuga perferendis numquam voluptatem debitis officiis quam cumque libero minima consequatur vero, natus quibusdam temporibus, corporis illo nulla veniam sint.</span>
                    <div>
                        <button>Continuar estudando</button>
                        <button>Explorando catalago de cursos</button>
                    </div>

                </div>
                <img src="https://estudeprisma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeople_big.85eeb40d.png&w=992&q=75" alt="people" width={426} height={426}/>
            </div>
        </div>
    )
}

export { HomeScreen }