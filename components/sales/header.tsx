export default function Header() {
  const now = new Date();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold">
          Good Morning, Manali
        </h2>

        <p className="text-slate-500">
          Welcome back
        </p>
      </div>

      <div className="text-right">
        <h3 className="font-semibold">
          {now.toLocaleTimeString()}
        </h3>

        <p className="text-slate-500">
          {now.toDateString()}
        </p>
      </div>
    </div>
  );
}
