import { useMutation, useQueryClient } from "react-query";
import { ReactionBody, postReaction } from "./api";
import { QUERY_KEYS } from "./constants";

export default function useMutateReactions(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ timestamp, emoji }: Omit<ReactionBody, "userId">) =>
      postReaction({ userId, timestamp, emoji }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.reactions] });
    },
  });
}
