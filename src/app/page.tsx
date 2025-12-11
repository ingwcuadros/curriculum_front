import Image from "next/image";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
        ¡Tailwind está funcionando! 🎨
      </h1>
      <p className="text-xl mb-8">
        Si ves este fondo degradado y texto grande, Tailwind está activo.
      </p>
      <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition duration-300">
        ¡Haz clic aquí!
      </button>
    </main>

  );
}
