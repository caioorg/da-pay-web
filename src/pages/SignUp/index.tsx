import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '@/contexts/AuthContext';
import { useNotification } from '@/contexts/NotificationToast';
import Field from '@/common/components/FieldText'
import { Link } from 'react-router-dom';

type SingUpForm = {
  email: string,
  password: string,
  term: boolean
}

const validation = yup.object({
  email: yup.string().email('Precisa ser um e-mail válido').required('Obrigatório'),
  password: yup.string().min(8, 'No minímo 8 caracteres').required('Obrigatório'),
  term: yup.boolean().required('Obrigatório').oneOf([true], "The terms and conditions must be accepted.")
})

function SingUp() {
  const { signUpWithCredentials } = useAuth()
  const { addToast } = useNotification()

  const { register, handleSubmit, formState: { errors } } = useForm<SingUpForm>({
    resolver: yupResolver(validation)
  })

  const fnSubmitForm = useCallback(async ({ email, password }: SingUpForm) => {
    try {
      await signUpWithCredentials(email, password)
    } catch (error) {
      addToast({ message: 'Ooops! Não foi possível criar a conta, tente novamente!', type: 'error'})
    }

  }, [])

  return (
    <div className="h-screen flex bg-white flex-col items-center">
      <div className='w-full bg-gradient-to-b from-[#CE9FFC] to-[#7367F0] h-60 bg-cover bg-no-repeat' />
      <div className="w-full max-w-lg rounded-3xl py-3 pb-10 flex flex-col gap-6 px-11 bg-white -mt-16 shadow-lg xs:shadow-none xs:px-5">
        <p className='text-xs text-black mt-4 font-semibold text-center'>Me cadastrar com:</p>
        <div className='w-full justify-center flex gap-3 flex-row'>
          <button className='p-2.5 rounded-lg border text-sm flex items-center gap-2'>
            <FcGoogle className='w-5 h-5' />
            Entrar com Google
          </button>
        </div>
        <p className='text-xs text-[#ADB5BD] font-semibold text-center'>ou</p>
        <form onSubmit={handleSubmit(fnSubmitForm)} autoComplete='off'>
          <Field {...register('email')} type='email' label='E-mail' error={errors.email?.message} />
          <Field {...register('password')} type='password' label='Senha' error={errors.password?.message} />

          <div className="mb-5 w-full flex flex-row gap-5">
            <input type='checkbox' {...register('term')} />
            <label className={`text-xs ${errors.term?.message ? 'text-red-700' : 'text-black'}`}>Eu concordo com <span className='font-semibold text-xs'>Termos e Condições</span></label>
          </div>
          <div className='grid grid-cols-2 items-center mt-5 gap-4'>
            <Link to='/' className='border-[#7367F0] text-[#7367F0] font-semibold border text-center rounded-lg text-md p-3'>Cancelar</Link>
            <button type='submit' className="bg-[#7367F0] w-full p-3 text-md font-semibold text-white rounded-lg focus:outline-none">Criar conta</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SingUp
