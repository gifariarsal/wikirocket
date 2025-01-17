import getWikiResults from '@/lib/getWikiResult';
import Item from './components/Item';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} - Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  const content = (
    <main className="bg-white mx-auto max-w-2xl py-1 min-h-[calc(100vh-76px)]">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <>
          <h2 className="text-xl font-bold px-2">Not Found</h2>
          <p className="mt-4 px-2">
            Your search for <span className="text-[red] italic">{displayTerm}</span>{' '}
            is not found
          </p>
        </>
      )}
    </main>
  );

  return content;
}
