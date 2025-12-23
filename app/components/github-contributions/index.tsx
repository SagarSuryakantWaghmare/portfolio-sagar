import Contributions from "./contributions";

export default function GithubContributions() {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-2xl font-extrabold leading-9 tracking-tight text-text-primary">
          Github
        </p>
        <p className="text-text-tertiary leading-4">
          Contributions Stats
        </p>
      </div>
      <Contributions />
    </section>
  );
}
