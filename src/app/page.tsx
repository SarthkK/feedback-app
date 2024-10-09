import Header from "@/components/Header";

export default function Home() {
  const comments = [
    { id: 1, content: "First comment" },
    { id: 2, content: "Second comment" },
    { id: 3, content: "Third comment" },
  ];
  return (
    <>
      <div className="bg-slate-700 text-white">Could be more</div>
      <h1 className="text-red-500 text-4xl">Hey</h1>
      <Header />
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </>
  );
}
