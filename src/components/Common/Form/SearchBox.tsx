import * as S from "./SearchBox.styles";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

interface SearchBoxProps {
  handleKeyDown: (event: any) => void;
  setQuery: any;
  query: string;
  handleSearch: () => void;
  placeholder: string;
}

function SearchBox({
  handleKeyDown,
  setQuery,
  query,
  handleSearch,
  placeholder,
}: SearchBoxProps) {
  return (
    <S.SearchBox>
      <S.Input
        type="text"
        onKeyDown={(event) => handleKeyDown(event)}
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        placeholder={placeholder}
      />
      <S.SearchButton onClick={() => handleSearch()}>
        <SearchIcon width={20} height={20} fill="black" />
      </S.SearchButton>
    </S.SearchBox>
  );
}
export default SearchBox;
