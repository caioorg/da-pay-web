import { yupResolver } from '@hookform/resolvers/yup';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Field from '@/common/components/FieldText'
import Select from '@/common/components/FieldSelect';
import TableEntry from '@/common/components/TableEntry';

type EntryForm = {
  description: string,
  type: string
  amount: number,
  recurrent: string
  typeRecurrent: string
}

const validation = yup.object({
  description: yup.string().required('Informe o titulo da despesa'),
  type: yup.string().required('Informe o tipo da despesa'),
  amount: yup.number().required('Informe o valor da despesa')
})

const Entry: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<EntryForm>({
    resolver: yupResolver(validation),
    defaultValues: { recurrent: 'no' }
  })

  const conditionsForm = useMemo(() => {
    return {
      isRecurrent: watch('recurrent') === 'yes',
      isTypeRecurrent: watch('typeRecurrent')
    }
  }, [watch()])

  const optionsTypeRecurrent = useMemo(() => (
    [
      { value: '', label: 'Tipo da despesa' },
      { value: 'food', label: 'Alimentação' },
      { value: 'health', label: 'Saúde' },
      { value: 'restaurant', label: 'Restaurante' },
      { value: 'wage', label: 'Salário' },
      { value: 'others', label: 'Outros' },
    ]
  ), [])

  return (
    <div className='w-full bg-[#363447] p-7 rounded-2xl'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='border-r-2 border-r-white border-dashed p-6'>
          <h1 className='font-bold text-white text-2xl mb-4'>Cadastrar</h1>
          <form className='flex flex-col gap-2'>
            <Field {...register('description')} type='text' label='Título da despesa' error={errors.description?.message} />
            <div className='grid grid-cols-2 gap-4'>
              <Select {...register('type')} options={optionsTypeRecurrent}  />
              <div className='w-full flex items-start flex-col mb-2'>
                <div className='col-span-2'>
                  <p className='text-white font-semibold text-sm mb-1'>É uma despesa recorrente?</p>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="bordered-radio-1" className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-1">
                    <input {...register('recurrent')} id="bordered-radio-1" type="radio" value="yes" name='recurrent' className="text-[#0f99ff] bg-gray-100 border-gray-300" />
                    Sim
                  </label>
                  <label htmlFor="bordered-radio-2" className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-1">
                    <input {...register('recurrent')} id="bordered-radio-2" type="radio" value="no" name='recurrent' className="text-[#0f99ff] bg-gray-100 border-gray-300" />
                    Não
                  </label>
                </div>
              </div>
            </div>



            {conditionsForm.isRecurrent && (
              <div className='w-full flex items-start flex-col mb-2'>
                <div className='col-span-2'>
                  <p className='text-white font-semibold text-sm mb-2'>Qual tipo da recorrência?</p>
                </div>
                <div className="flex items-center gap-2 w-full mb-1">
                  <label htmlFor="bordered-radio-1" className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-1">
                    <input {...register('typeRecurrent')} id="bordered-radio-1" type="radio" value="fixed" name='typeRecurrent' className="text-[#0f99ff] bg-gray-100 border-gray-300" />
                    Despesa fixa
                  </label>
                  <label htmlFor="bordered-radio-2" className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-1">
                    <input {...register('typeRecurrent')} id="bordered-radio-2" type="radio" value="installments" name='typeRecurrent' className="text-[#0f99ff] bg-gray-100 border-gray-300" />
                    Parcelado
                  </label>
                  <label htmlFor="bordered-radio-3" className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-1">
                    <input {...register('typeRecurrent')} id="bordered-radio-3" type="radio" value="financing" name='typeRecurrent' className="text-[#0f99ff] bg-gray-100 border-gray-300" />
                    Financiamento
                  </label>
                </div>

                {(conditionsForm.isTypeRecurrent === 'installments' || conditionsForm.isTypeRecurrent === 'financing') && (
                  <div className='grid grid-cols-2 gap-4 mt-3 w-full'>
                    <Select {...register('description')} options={[{ value: '2', label: '2 vezes'}]}  />
                    <Field {...register('amount')} type='number' label='Valor da despesa' error={errors.description?.message} />
                  </div>
                )}
              </div>
            )}

            {(!conditionsForm.isRecurrent || conditionsForm.isTypeRecurrent === 'fixed') && (
              <div className='mb-2 w-full'>
                <Field {...register('amount')} type='number' label='Valor da despesa' error={errors.description?.message} />
              </div>
            )}


            <button type='submit' className="font-semibold bg-gradient-to-b from-[#1831D1] to-[#0f99ff] w-full p-3 text-md text-white rounded-lg focus:outline-none">Cadastrar</button>
          </form>
        </div>
        <div className='col-span-2 p-6'>
          <h1 className='font-bold text-white text-2xl'>Lançamentos</h1>
          <TableEntry resume />
        </div>
      </div>

    </div>
  )
}

export default Entry;
