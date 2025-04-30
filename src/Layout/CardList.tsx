import { useEffect, useState, useCallback } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import StatusMessage from "../Components/StatusMessage/StatusMessage";
import CardGrid from "../Components/CardGrid/CardGrid";
import LoadMoreButton from "../Components/LoadMoreButton/LoadMoreButton";

export default function CardList() {
  const [data, setData] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLoadMore = useCallback(() => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 10);
      setLoadingMore(false);
    }, 1000);
  }, []);

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-2 md:p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
        Blog Post Listing Page
      </h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <StatusMessage
        loading={loading}
        error={error}
        noResults={!loading && !error && filteredPosts.length === 0}
      />

      {!loading && !error && filteredPosts.length > 0 && (
        <>
          <div className="h-[calc(100vh-248px)] overflow-auto p-1 md:p-3">
            <CardGrid posts={filteredPosts.slice(0, visibleCount)} />
          </div>

          {visibleCount < filteredPosts.length && (
            <div className="mt-4 text-center">
              {loadingMore ? (
                <div className="flex justify-center">
                  <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <LoadMoreButton onClick={handleLoadMore} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
