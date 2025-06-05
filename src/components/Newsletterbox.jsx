import React from 'react'

const Newsletterbox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();

    }

    return (
        <div className='text-center'>

            <p className='text-2xl font-medium text-white'>Subscribe now & get 30% off</p>

            <p className='text-gray-400 mt-3'>
                Limited-time offer! Subscribe now and never miss a deal.
            </p>

            <form onSubmit={onSubmitHandler}
                className="w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3 text-white rounded">

                <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />

                <button type='submit'
                        className='text-white text-xs sm:text-sm px-8 py-3 bg-black hover:bg-violet-700 rounded-md transition duration-200'>
                        SUBSCRIBE
                    </button>
            </form>

        </div>
    )
}

export default Newsletterbox
