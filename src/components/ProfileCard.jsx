function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function ProfileCard({ image, name, title, bio }) {
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
      <div className="h-24 bg-linear-to-r from-violet-500 to-purple-300" />

      <div className="px-6 pb-8 text-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="-mt-12 mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
          />
        ) : (
          <div
            aria-label={name}
            className="-mt-12 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-indigo-100 text-2xl font-semibold text-indigo-700 shadow-md"
          >
            {getInitials(name)}
          </div>
        )}

        <h2 className="mt-4 text-xl font-bold text-slate-900">{name}</h2>
        <p className="mt-1 text-sm font-medium text-purple-600">{title}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">{bio}</p>
      </div>
    </article>
  );
}