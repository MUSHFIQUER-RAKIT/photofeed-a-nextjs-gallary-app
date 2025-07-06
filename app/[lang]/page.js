import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <h1 className="text-3xl">{dictionary.followers} </h1>
    </>
  );
}
