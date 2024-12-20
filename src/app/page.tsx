import NewsList from "./components/news/NewsList";

export default function Home() {
  return (
    <section className="container mx-auto p-2">
      <div className="text-center my-10 max-w-[900px] mx-auto">
        <h1 className="text-5xl font-bold">
          Find Trending News Around The World From Your Fingertips
        </h1>
        <p className="mt-5 text-2xl font-light text-gray-500">
          Easily find,sport,business,entertainment,tech,agriculture and
          education news around the world
        </p>
      </div>

      <NewsList />
    </section>
  );
}
