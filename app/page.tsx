import { uploadFile } from "./actions/upload";
import { createClient } from "./utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: todos, error } = await supabase.from("todos").select("*");
  return (
    <div className="mt-8">
      <h1 className="text-center text-2xl font-bold">My Todo</h1>
      <div className="flex flex-col gap-y-4 justify-center items-center mt-4">
        {todos?.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <p>
              {todo.title} - {todo.status}
            </p>
          </div>
        ))}
        {error && <p>{error.message}</p>}
      </div>
      <h1 className="text-center text-2xl font-bold mt-8">
        Upload Food Picture
      </h1>
      <form action={uploadFile}>
        <input type="file" name="food" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
