'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  };

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-base p-2 w-80 text-xl rounded-lg"
        placeholder="Search"
      />
      <button className="p-2 text-xl rounded-lg bg-base hover:bg-slate-200 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
}
