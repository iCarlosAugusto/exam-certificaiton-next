import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

function App() {
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
      <div className="w-full bg-green-300 p-10 flex items-center flex-col">
        <p className="text-4xl font-bold text-center">Continue de onde você parou</p>
      </div>

      <div className="w-full bg-gray-200 flex items-center flex-col py-10">
        <p className="text-4xl font-bold text-center">Explore todos os cursos disponíveis</p>
        <span className="text-center">Aqui são algumas das categorias de cursos mais populares</span>

        <div className="w-full mt-6">
          <ul className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            <li className="flex flex-col items-center">
              <div className="w-36 h-36 bg-red-200 rounded-full flex items-center justify-center">
                <p>teste2</p>
              </div>
              <span className="mt-2">AWS</span>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-36 h-36 bg-red-200 rounded-full flex items-center justify-center">
                <p>teste</p>
              </div>
              <span className="mt-2">AWS</span>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-36 h-36 bg-red-200 rounded-full flex items-center justify-center">
                <p>teste</p>
              </div>
              <span className="mt-2">AWS</span>
            </li>
          </ul>
        </div>

        <button className="bg-blue-400 px-6 py-2 rounded-xl text-white mt-6">
          <Link to="/courses">
            Explorar todos os cursos
          </Link>
        </button>

        <button>
          <Link to="/questions">
            Explorar todos os cursos
          </Link>
        </button>
      </div>
    </Fragment>
  )
}

export default App
