import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Layout: React.FC = () => {
    const { logout } = useAuth()
    return (
        <>
            <header className='mb-10'>
                <nav className="px-2 sm:px-4 py-4">
                    <div className="container flex items-center justify-between mx-auto">
                        <Link to="/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DaPay</span>
                        </Link>

                        <div className="md:block md:w-auto">
                            <ul className="flex flex-row items-center">
                                <li>
                                    <Link to='/' className="py-2 pl-3 pr-4 font-bold" aria-current="page">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/lancamento" className="py-2 pl-3 pr-4 font-bold">
                                        Lançamento
                                    </Link>
                                </li>
                                <li>
                                    <button type='button' className="py-2 pl-3 pr-4 font-bold" onClick={() => logout()}>Sair</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='container m-auto'>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;
