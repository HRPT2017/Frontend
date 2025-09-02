"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome!</h1>
      <p>Please choose where to go:</p>

      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => router.push("/cpr")}
        >
          Campeonato de Portugal de Rallys
        </button>
      </div>
    </div>
  );
}
