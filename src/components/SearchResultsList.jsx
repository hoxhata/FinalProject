import SearchResult from "./SearchResult"

function SearchResultsList  ({results})  {


  return (
    <>
    <div className="search-list">
    {results.map((result, id) => {
        return <SearchResult result={result} key={id} />
    })}

    </div>
    </>
    
  )
}

export default SearchResultsList