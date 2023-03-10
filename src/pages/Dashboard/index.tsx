import { FaSmile, FaHome } from 'react-icons/fa'
import CircleGraph from '@/common/components/CircleGraph';
import BarsGraph from '@/common/components/BarsGraph';

const Dashboard: React.FC = () => {

  return (
    <div className='w-full h-full flex items-center text-white flex-col'>
      <div className='grid grid-cols-3 gap-8 mb-14'>
        <div className='bg-[#363447] p-7 rounded-2xl flex flex-col items-center justify-between shadow-md min-h-[379px]'>
          <span className='text-2xl font-semibold'>NPS Mês Atual</span>
          <div className='flex flex-col gap-4 items-center'>
            <FaSmile size={54} color='#81FBB8' />
            <span className='text-[#81FBB8] text-2xl font-semibold'>Excelente</span>
            <span className='text-sm font-medium'>Saldo de: R$ 3.000,00</span>
          </div>
        </div>
        <div className='bg-[#363447] p-7 rounded-2xl flex w- flex-col gap-8 items-center justify-between shadow-md min-h-[379px] relative'>
          <span className='text-2xl font-semibold'>Receita</span>
          <CircleGraph
            content='alcançada'
            percent='80'
            id='circle-received'
            width='42'
            height='42'
            defaultColor='#D9D9D9'
            borderPixel='20'
            primaryColor='#CE9FFC'
            secondaryColor='#7367F0'
          />

          <div className='flex justify-around w-full'>
            <p className='flex items-center gap-1 text-sm font-medium'>
              <span className='w-4 h-4 rounded-full bg-[#4A4556] inline-flex' />
              Estimativa: R$ 17.000,00
            </p>
            <p className='flex items-center gap-1 text-sm font-medium'>
              <span className='w-4 h-4 rounded-full bg-gradient-to-r from-[#CE9FFC] to-[#7367F0] inline-flex' />
              Alcançado: 15.000,00
            </p>
          </div>
        </div>
        <div className='bg-[#363447] p-7 rounded-2xl flex flex-col items-center justify-between shadow-md min-h-[379px] relative'>
          <span className='text-2xl font-semibold'>Despesas</span>
          <CircleGraph
            content='lançadas'
            percent='30'
            id='circle-sell'
            width='42'
            height='42'
            defaultColor='#D9D9D9'
            borderPixel='20'
            primaryColor='#DF9780'
            secondaryColor='#A66DE9'
          />

          <div className='flex justify-around w-full'>
            <p className='flex items-center gap-1 text-sm font-medium'>
              <span className='w-4 h-4 rounded-full bg-[#4A4556] inline-flex' />
              Fixas: R$ 8.000,00
            </p>
            <p className='flex items-center gap-1 text-sm font-medium'>
              <span className='w-4 h-4 rounded-full bg-gradient-to-r from-[#DF9780] to-[#A66DE9] inline-flex' />
              Relativas: 2.000,00
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
