import Head from 'next/head'
import Link from 'next/link'

export default function upload() {
    return (
	<div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-800">
	    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
		<h1 className="text-7xl font-bold">
		    <a className="text-red-600 dark:text-red-600">
			EyeQ
		    </a>
		</h1>
		
		
		<div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
		    <a className="p-6 mt-6 text-center border w-96 rounded-2xl">
			<p className="mt-4 text-xl dark:text-white">
			    Upload
			</p>
		    </a>
		    
		</div>
	    </main>
	    
	</div>
    )
}
