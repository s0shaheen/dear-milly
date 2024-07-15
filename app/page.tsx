// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col mt-20 items-center min-h-screen">
      <h1 className="font-cormorantGaramond font-light text-4xl font-bold mb-4">hi milly</h1>
      <div className="mb-8">
        <img src="/frontpage.png" alt="Landscape" className="w-full h-auto" />
      </div>
      <div className="bg-lighter-green p-6 rounded-md text-center">
        <p className="font-poppins mb-10 text-md">
          I wanted to make a little space to share our memories together. Think of it as a time capsule.
          On the way: functionality for you to edit + add diary posts, better color scheme and readability, Spotify integration
        </p>
        <p className="font-poppins text-md">
          Made with ❤️
        </p>
      </div>
    </div>
  );
}
