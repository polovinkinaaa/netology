export async function getPosts() {
  const response = await fetch("http://localhost:7070/posts");
  if (!response.ok) {
    throw new Error("Ошибка сети");
  }
  return response.json();
}

export async function getPost(id: string) {
  const response = await fetch(`http://localhost:7070/posts/${id}`);
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

export async function deletePost(id: string) {
  const response = await fetch(`http://localhost:7070/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Ошибка сети");
  }
}

export async function editPost(content: string, id: string) {
  const response = await fetch(`http://localhost:7070/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, content }),
  });
  if (!response.ok) {
    throw new Error("Ошибка сети");
  }
}
