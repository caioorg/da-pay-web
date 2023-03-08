import React from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'

type TableEntryProps = {
  resume?: boolean
}

const TableEntry: React.FC<TableEntryProps> = ({ resume }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className='border-b'>
          <th className='text-start py-3'>Data</th>
          <th className='text-start py-3'>Categoria</th>
          <th className='text-start py-3'>Descritivo</th>
          <th className='text-start py-3'>Valor</th>
          <th className='text-start py-3'>Criado por</th>
          {!resume && <th className='text-start py-3'>Ações</th>}
        </tr>
      </thead>
      <tbody>
        <tr className='border-b'>
          <td className='text-start py-3 font-light text-sm'>10/10/2022</td>
          <td className='text-start py-3 font-light text-sm'>
            <span className='rounded-md px-3 py-1 bg-red-400 text-xs text-white font-semibold'>
              Alimentação
            </span>
          </td>
          <td className='text-start py-3 font-light text-sm'>Mc'Donalds</td>
          <td className='text-start py-3 font-light text-sm'>R$ 90,00</td>
          <td className='text-start py-3 font-light text-sm'>Caio Almeida</td>
          {!resume && (
            <th className='text-start py-3 font-light text-sm'>
              <button title='Editar'><BsPencilSquare className='w-4 h-4 mr-2' /></button>
              <button title='Excluir'><BsTrash className='w-4 h-4'/></button>
            </th>
          )}

        </tr>
      </tbody>
    </table>
  )
}

export default TableEntry;
