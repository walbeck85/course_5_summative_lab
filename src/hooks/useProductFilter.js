// src/hooks/useProductFilter.js
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