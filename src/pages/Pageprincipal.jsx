import { useEffect, useState } from 'react'
import Menu from './Menu'
import Image from "../components/Image"
import Icons from "../components/Icons"


async function fetchData(url) {
    const rs = await fetch(url)
    const json = await rs.json()
    return json
}

export default function Pageprincipal() {

    const [find, setFind] = useState('winter'); // Valor de busqueda y nuevo valor
    const [result, setResult] = useState([])
    
    function getData() {
        const key = 'b6d188ad4b8b22eeda9259e5bdf268cf'
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${find}&per_page=24&format=json&nojsoncallback=1`

        fetchData(url)
            .then(data => setResult(data.photos.photo));
    }

    useEffect(() => {
        getData()
    }, [])

    return (

        <div className="container bg-gradient-to-tl from-amber-100 to-amber-50 p-3 w-full grid gap-y-4">
            <header className="flex my-12 font-bold text-slate-900 text-5xl w-full justify-center ">
                <h1 >My Galery</h1>
            </header>
            <div className="w-full grid gap-y-8">

                <div className="max-w-lg mx-auto w-full">
                    <div className="relative w-full">
                        <input onChange={(e) => setFind(e.target.value)} type="text" placeholder="Search..." />
                        <button onClick={getData} className="absolute top-0 end-0 p-2.5 px-7 text-sm font-medium h-full text-white bg-slate-900 rounded-e-lg border border-slate-900 hover:bg-slate-900 focus:outline-none dark:hover:bg-slate-700
                        focus:ring-2 focus:ring-blue-950">
                            <Icons />
                        </button>
                    </div>
                </div>
                <Menu/>
            </div>
            <div className="flex flex-wrap justify-center gap-8 ">
                {result &&
                    result.map((rs) =>
                        <Image key={rs.id} photo={rs} />
                    )}
            </div>

        </div>

    )
}




