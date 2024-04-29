import { Fragment } from "react/jsx-runtime"

function CourseCatalog() {
    return (
        <Fragment>
            <div className="w-full bg-red-400 px-28 py-2 flex justify-between items-center">
                <div>
                <span>Logo</span>
                <a className="ml-2" href="#">Cursos</a>
                <a className="ml-2" href="#">Preços</a>
                </div>

                <div>
                <button className="p-3 bg-green-300 rounded-2xl m-1">
                    Login
                </button>  
                <button className="p-3 bg-green-300 rounded-2xl">
                    Criar conta
                </button>               
                </div>
            </div >
        </Fragment>
    )
}

export { CourseCatalog }