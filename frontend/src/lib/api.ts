import type { CandlestickData, Time } from "lightweight-charts";
import type { ReactionBody, Reactions } from "../types";
import { API_BASE_URL } from "./constants";

export async function getSeries() {
  const res = await fetch(`${API_BASE_URL}/series`);

  if (!res.ok) throw new Error("Something went wrong getting series");

  const data: CandlestickData<Time>[] = await res.json();

  return data;
}

export async function getReactions() {
  const res = await fetch(`${API_BASE_URL}/getReactions`);

  if (!res.ok) throw new Error("Something went wrong getting reactions");

  const data: Reactions = await res.json();

  return data;
}

export async function postReaction(body: ReactionBody) {
  const res = await fetch(`${API_BASE_URL}/addReaction`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Something went wrong posting reaction");

  return res.text();
}
