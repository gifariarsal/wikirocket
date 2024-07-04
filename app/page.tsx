import Search from './components/Search';

export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-76px)] flex justify-center items-center text-center">
      <div className="bg-white p-4 md:p-24 rounded-lg text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome to WikiRocket
        </h1>
        <p className="md:text-lg">
          Search for your favorite Wikipedia articles
        </p>
      </div>
    </main>
  );
}
