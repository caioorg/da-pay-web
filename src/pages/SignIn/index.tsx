import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { redirect } from "react-router-dom";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '@/contexts/AuthContext'
import Field from '@/common/components/FieldText'

type SignInForm = {
  email: string,
  password: string,
}

const validation = yup.object({
  email: yup.string().email('Precisa ser um e-mail válido').required('Obrigatório'),
  password: yup.string().min(8, 'No minímo 8 caracteres').required('Obrigatório')
})

function SignIn() {
  const { signInWithGoogle, signInWithCredentials } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>({
    resolver: yupResolver(validation)
  })

  const fnSubmitForm = useCallback(({ email, password }: SignInForm) => {
    signInWithCredentials(email, password)
  }, [])

  return (
    <div className="h-screen flex bg-white flex-col items-center">
      <div className='w-full bg-signin h-60 bg-cover bg-no-repeat' />
      <div className="w-full max-w-lg rounded-3xl py-3 flex flex-col gap-6 px-11 bg-white -mt-16">
        <p className='text-xs text-black mt-4 font-semibold text-center'>Entrar com:</p>
        <div className='w-full justify-center flex gap-3 flex-row'>
          <button className='p-2.5 rounded-lg border text-sm flex items-center gap-2' onClick={() => signInWithGoogle()}>
            <FcGoogle className='w-5 h-5' />
            Entrar com Google
          </button>
        </div>
        <p className='text-xs text-[#ADB5BD] font-semibold text-center'>ou</p>
        <form onSubmit={handleSubmit(fnSubmitForm)} autoComplete='off'>
          <Field {...register('email')} type='email' label='E-mail' error={errors.email?.message} />
          <Field {...register('password')} type='password' label='Senha' error={errors.password?.message} />

          <button type='submit' className="bg-[#343A40] w-full p-3 text-md text-white rounded-lg focus:outline-none">Entrar</button>
        </form>
        <p className='text-center font-xs pb-5'>Não tem conta? <span className='font-md font-semibold cursor-pointer' onClick={() => redirect('/criar-conta')}>Criar uma conta</span></p>
      </div>
    </div>
  )
}

export default SignIn
