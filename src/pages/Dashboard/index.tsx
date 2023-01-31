import { VscGraph } from 'react-icons/vsc'
import Field from '@/common/components/Field';
import TableEntry from '@/common/components/TableEntry';

const Dashboard: React.FC = () => {

  return (
    <>
      <div className="w-full bg-[#1C084D] h-60 flex items-center justify-center bg-cover bg-no-repeat">
        <div className='container'>
          <h1 className="text-4xl font-semibold text-white">Dasboard</h1>
        </div>
      </div>
      <div className='container m-auto'>
        <div className='grid grid-cols-4 gap-3 -mt-10 mb-5'>
          <div className='border rounded-lg px-6 py-4 shadow-md bg-white flex flex-col justify-evenly'>
            <p className='text-md text-gray-400 mb-3'>Periodo</p>
            <Field type='date' label='Data' />
            <button className="bg-[#8607F4] w-full p-3 text-md text-white font-bold rounded-lg focus:outline-none">Pesquisar</button>
          </div>
          <div className='border rounded-lg px-6 py-4 shadow-md bg-white flex flex-col justify-evenly'>
            <p className='text-md text-gray-400'>Receita</p>
            <p className='flex flex-row font-bold justify-between w-full items-center'>
              R$ 7.500,00
              <span><VscGraph className='w-10 h-10 text-[#8607F4]' /></span>
            </p>
            <p className='text-[10px] text-gray-400'>
              <span className='font-semibold text-green-600'>+3.1%</span> que mês passado
            </p>
          </div>
          <div className='border rounded-lg px-6 py-4 shadow-md bg-white flex flex-col justify-evenly'>
            <p className='text-md text-gray-400'>Desespesa</p>
            <p className='flex flex-row font-bold justify-between w-full items-center'>
              R$ 7.500,00
              <span><VscGraph className='w-10 h-10 text-[#8607F4]' /></span>
            </p>
            <p className='text-[10px] text-gray-400'>
              <span className='font-semibold text-red-600'>-3.1%</span> que mês passado
            </p>
          </div>
          <div className='border rounded-lg px-6 py-4 shadow-md bg-white flex flex-col justify-evenly'>
            <p className='text-md text-gray-400'>Balanço</p>
            <p className='flex flex-row font-bold justify-between w-full items-center'>
              R$ 7.500,00
              <span><VscGraph className='w-10 h-10 text-[#8607F4]' /></span>
            </p>
            <p className='text-[10px] text-gray-400'>
              <span className='font-semibold text-green-600'>+3.1%</span> que mês passado
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 shadow-md bg-white'>
          <div className='border rounded-lg px-6 py-4 shadow-md bg-white'>
            <h2 className='text-md text-gray-400 mb-4'>Lançamentos</h2>
            <TableEntry />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
