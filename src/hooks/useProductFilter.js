// Custom Hook: useProductFilter
// This hook filters an array of product records based on a search term.
// It returns a memoized array of products whose title or artist includes the search term.
// We use `useMemo` to avoid recalculating the filtered array unless the input records or searchTerm changes.

import { useMemo } from "react";

function useProductFilter(records, searchTerm) {
  return useMemo(() => {
    const lower = searchTerm.toLowerCase();
    return records.filter(
      (r) =>
        r.title.toLowerCase().includes(lower) ||
        r.artist.toLowerCase().includes(lower)
    );
  }, [records, searchTerm]);
}

export default useProductFilter;