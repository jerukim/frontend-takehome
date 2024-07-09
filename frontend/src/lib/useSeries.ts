import { useQuery } from "react-query";
import { getSeries } from "./api";
import { QUERY_KEYS } from "./constants";

export default function useSeries() {
  return useQuery({
    queryKey: [QUERY_KEYS.series],
    queryFn: getSeries,
    initialData: [],
  });
}
