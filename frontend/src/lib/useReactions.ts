import { useQuery } from "react-query";
import { getReactions } from "./api";
import { QUERY_KEYS } from "./constants";

export default function useReactions() {
  return useQuery({
    queryKey: [QUERY_KEYS.reactions],
    queryFn: getReactions,
    initialData: {},
  });
}
