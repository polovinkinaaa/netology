export async function getNewItem(id: string, token: string) {
  const response = await fetch(`http://localhost:7070/private/news/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (response.status === 401) {
    throw new Error("401");
  }
  if (response.status === 404) {
    throw new Error("404");
  }
  if (!response.ok) {
    throw new Error("Ошибка сети");
  }
  return response.json();
}

export async function getNewsItem(token: string) {
  const response = await fetch(`http://localhost:7070/private/news`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (response.status === 401) {
    throw new Error("401");
  }
  if (response.status === 404) {
    throw new Error("404");
  }
  if (!response.ok) {
    throw new Error("Ошибка сети");
  }
  return response.json();
}
