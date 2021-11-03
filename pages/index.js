import Head from 'next/head'
import Link from 'next/link'

export default function index() {
    return (
	<div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-800">
	    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
		<h1 className="text-7xl font-bold">
		    <a className="text-red-600">
			EyeQ
		    </a>
		</h1>
		
		
		<div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
		    <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
			<h3 className="text-2xl dark:text-white font-bold">Upload &rarr;</h3>
			<p className="mt-4 text-xl dark:text-white">
			    Upload a file and have it read to you!
			</p>
		    </a>
		    
		</div>
	    </main>
	    
	</div>
    )
}
