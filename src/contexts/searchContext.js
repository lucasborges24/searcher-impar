import { createContext, useState } from 'react';

const SearchContext = createContext();
export default SearchContext;

export function SearchProvider({ children }) {
  const [inputFilter, setInputFilter] = useState(null);

  return <SearchContext.Provider value={{ inputFilter, setInputFilter }}>{children}</SearchContext.Provider>;
}
