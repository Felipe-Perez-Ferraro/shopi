import { useState } from "react";

export function useColumns() {
  const [columns, setColumns] = useState(false);
  const handleColumns = () => {
    setColumns(!columns);
  };

  return { columns, handleColumns };
}
