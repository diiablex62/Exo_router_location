import React from "react";

const Login = () => {
  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>Connexion</h2>
      <form>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200'
            placeholder='Entrez votre email'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'>
            Mot de passe
          </label>
          <input
            type='password'
            id='password'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200'
            placeholder='Entrez votre mot de passe'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700'>
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Login;
