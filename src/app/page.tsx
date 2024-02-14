import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl bg-sky-400 text-slate-950 rounded-md p-2">Axon Lab</h1>
      <h1 className="text-2xl">এক্সন ল্যাব</h1>
      <h1>Farid Akanda</h1>
      <h2>Computer Programmer and Web Developer</h2>
      <p>Orbit lab is one of the newest scientific study center 
        on my local area.
      </p>
      <div className="flex rounded-md bg-slate-100">
        <Image src="/twitter.png" alt="twitter" height="48" width="48" />
        <h1 className="p-3 text-slate-900">Following on X(twitter)</h1>
      </div>
      <div className="flex rounded-md bg-slate-100">
        <Image src="/telegram.png" alt="twitter" height="48" width="48" />
        <h1 className="p-3 text-slate-900">Following on Telegram</h1>
      </div>
      <div className="flex rounded-md bg-slate-100">
        <Image src="/github.png" alt="twitter" height="48" width="48" />
        <h1 className="p-3 text-slate-900">Following on Github</h1>
      </div>
    </main>
  );
}
