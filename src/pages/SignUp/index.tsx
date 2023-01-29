import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '@/contexts/AuthContext';

type SingUpForm = {
  email: string,
  password: string,
  name: string,
  term: boolean
}

const validation = yup.object({
  name: yup.string().required('Obrigatório'),
  email: yup.string().email('Precisa ser um e-mail válido').required('Obrigatório'),
  password: yup.string().min(8, 'No minímo 8 caracteres').required('Obrigatório'),
  term: yup.boolean().required('Obrigatório').oneOf([true], "The terms and conditions must be accepted.")
})

function SingUp() {
  const { singUp } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<SingUpForm>({
    resolver: yupResolver(validation)
  })

  const fnSubmitForm = useCallback(async ({ email, name, password }: SingUpForm) => {
    const created = await singUp(email, password, name)

    // TODO: Redirect para tela de Login com Toast informando que foi criado.
    if (created) return

    // TODO: Caso retorne null é devido o usuário já existir na base
  }, [])

  return (
    <div className="h-screen flex bg-white flex-col items-center">
      <div className='w-full bg-signin h-60 bg-cover bg-no-repeat' />
      <div className="w-full max-w-lg rounded-3xl py-3 flex flex-col gap-6 px-11 bg-white -mt-16">
        <p className='text-xs text-black mt-4 font-semibold text-center'>Entrar com:</p>
        <div className='w-full justify-center flex gap-3 flex-row'>
          <button className='p-2.5 rounded-lg border text-sm flex items-center gap-2'>
            <FcGoogle className='w-5 h-5' />
            Entrar com Google
          </button>
        </div>
        <p className='text-xs text-[#ADB5BD] font-semibold text-center'>ou</p>
        <form onSubmit={handleSubmit(fnSubmitForm)} autoComplete='off'>
          <div className="mb-5 w-full">
            <input {...register('name')} placeholder='Nome Completo' type='text' className="w-full border rounded-lg p-3 text-[#ADB5BD] text-xs border-[#CED4DA] transition duration-150 ease-in-out focus:border-[#35025a]" />
            {errors.name?.message && <p className='text-xs font-semibold mt-1 text-red-700'>{errors.name.message}</p>}
          </div>
          <div className="mb-5 w-full">
            <input {...register('email')} placeholder='E-mail' type='email' className="w-full border rounded-lg p-3 text-[#ADB5BD] text-xs border-[#CED4DA] transition duration-150 ease-in-out focus:border-[#35025a]" />
            {errors.email?.message && <p className='text-xs font-semibold mt-1 text-red-700'>{errors.email.message}</p>}
          </div>

          <div className="mb-5 w-full">
            <input {...register('password')} type='password' placeholder='Senha' className="w-full border rounded-lg p-3 text-[#ADB5BD] text-xs border-[#CED4DA] transition duration-150 ease-in-out focus:border-[#35025a]" />
            {errors.password?.message && <p className='text-xs font-semibold mt-1 text-red-700'>{errors.password.message}</p>}
          </div>

          <div className="mb-5 w-full flex flex-row gap-5">
            <input type='checkbox' {...register('term')} />
            <label className='text-xs'>Eu concordo com <span className='font-semibold'>Termos e Condições</span></label>
          </div>

          <button type='submit' className="bg-[#343A40] w-full p-3 text-md text-white rounded-lg focus:outline-none">Criar conta</button>
        </form>
      </div>
    </div>
  )
}

export default SingUp
