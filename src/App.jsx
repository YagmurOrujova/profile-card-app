import ProfileCard from "./components/ProfileCard.jsx";

const user = {
  image: "/hello.jpeg",
  name: "Yagmur Orujova",
  title: "IT Student",
  bio: "Coffee lover, code enthusiast, and lifelong learner.",
};

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <ProfileCard
        image={user.image}
        name={user.name}
        title={user.title}
        bio={user.bio}
      />
    </main>
  );
}