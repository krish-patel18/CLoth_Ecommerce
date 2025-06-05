import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-white'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-white' />
      </div>

      {currentState === 'Login' ? '' : (
        <input
          className='w-full px-3 py-2 border border-gray-600 bg-transparent placeholder-gray-400'
          placeholder='Name'
          type='text'
          required
        />
      )}

      <input
        className='w-full px-3 py-2 border border-gray-600 bg-transparent placeholder-gray-400'
        placeholder='Email'
        type='email'
        required
      />
      <input
        className='w-full px-3 py-2 border border-gray-600 bg-transparent placeholder-gray-400'
        placeholder='Password'
        type='password'
        required
      />

      <div className='w-full flex justify-between text-sm mt-[-8px] text-gray-400'>
        <p className='cursor-pointer hover:text-gray-200'>Forgot Your Password?</p>
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign Up')}
            className='cursor-pointer hover:text-gray-200'
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className='cursor-pointer hover:text-gray-200'
          >
            Login Here
          </p>
        )}
      </div>

      <button className='bg-white text-black rounded font-light px-8 py-2 mt-4 cursor-pointer'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login;
