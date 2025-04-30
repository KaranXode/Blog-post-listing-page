type Props = {
    loading: boolean;
    error: boolean;
    noResults: boolean;
  };
  
  export default function StatusMessage({ loading, error, noResults }: Props) {
    const messages = {
      loading: "Loading...",
      error: "Error loading data. Please try again later.",
      noResults: "No matching posts found.",
    };

    if (loading || error || noResults) {
      const message = loading
        ? messages.loading
        : error
        ? messages.error
        : messages.noResults;
  
      const messageStyles = error
        ? "text-center text-red-500 font-medium"
        : "text-center text-gray-600";
  
      return <div className={`${messageStyles} flex justify-center items-center h-[70vh] text-lg md:text-xl`}>{message}</div>;
    }
  
    return null;
  }
  