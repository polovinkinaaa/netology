export async function getPosts() {
  const response = await fetch("http://localhost:7070/posts");
  if (!response.ok) {
    throw new Error("Ошибка сети");
  }
  return response.json();
}

export async function createPost(content: string) {
  const response = await fetch("http://localhost:7070/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 0, content }),
  });
  if (!response.ok) {
    throw new Error("Ошибка сети");
  }
}
