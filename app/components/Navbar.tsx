import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/" className="text-slate-800">
          Wiki<span className="text-slate-700">Rocket!</span>
        </Link>
      </h1>
      <Search />
    </nav>
  );
}
