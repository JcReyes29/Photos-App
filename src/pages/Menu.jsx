import {useState } from "react"
import Page from "../components/Page"

export default function Menu() {

    const [currentPage, setCurrentPage] = useState('Winter')
    const changePage = (e) => {
        setCurrentPage(e.target.value)
    }

    return (
        <>
            <div className=" max-w-lg md:max-2xl:flex w-full mx-auto gap-4">
                <button value='Winter' onClick={changePage}  type="button" className="text-white mb-3 w-full bg-slate-900 hover:bg-slate-800  font-medium rounded-md text-sm px-5 py-1.5 dark:bg-gray-800">Winter</button>
                <button value='Summer' onClick={changePage}  type="button" className="text-white mb-3 w-full bg-slate-900 hover:bg-slate-800 font-medium rounded-md text-sm px-5 py-1.5 dark:bg-gray-800 ">Summer</button>
                <button value='Fall' onClick={changePage}  type="button" className="text-white mb-3 w-full bg-slate-900 hover:bg-slate-800 font-medium rounded-md text-sm px-5 py-1.5 dark:bg-gray-800 ">Fall</button>
                <button value='Spring' onClick={changePage}  type="button" className="text-white mb-3 w-full bg-slate-900 hover:bg-slate-800 font-medium rounded-md text-sm px-5 py-1.5 dark:bg-gray-800 ">Spring</button>
            </div>
            <Page title={currentPage} />

        </>
    )

}



