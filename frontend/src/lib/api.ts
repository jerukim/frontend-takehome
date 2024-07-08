export type Reaction = {
  userId: string;
  emoji: string;
};

export async function getReactions() {
  const res = await fetch("http://localhost:3001/getReactions");

  if (!res.ok) throw new Error("Something went wrong getting reactions");

  const data: Record<string, Reaction[]> = await res.json();

  return data;
}

export type ReactionBody = Reaction & {
  timestamp: string;
};

export async function postReactions(body: {
  userId: string;
  timestamp: string;
  emoji: string;
}) {
  const res = await fetch("http://localhost:3001/addReaction", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Something went wrong posting reaction");

  return res.text();
}
