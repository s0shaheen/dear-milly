// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-8">
        <img src="/landscape.jpg" alt="Landscape" className="w-full h-auto" />
      </div>
      <div className="bg-lighter-green p-6 rounded-md text-center">
        <h1 className="font-cormorantGaramond font-light text-4xl font-bold mb-4">Welcome to Dear Milly</h1>
        <p className="font-poppins text-lg">
          This is a special place where we share our thoughts and memories.
        </p>
      </div>
    </div>
  );
}
