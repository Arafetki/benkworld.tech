import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Benk World",
};

export default function HomePage() {

  return (
    <section className="py-16">
      <div className="prose dark:prose-invert">
        <h1>HomePage</h1>
      </div>
    </section>
  );
}
