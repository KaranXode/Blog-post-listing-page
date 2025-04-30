type Props = {
    value: string;
    onChange: (value: string) => void;
  };
  
  export default function SearchBar({ value, onChange }: Props) {
    return (
      <div className="mb-4 bg-white p-3 shadow-lg rounded-md">
        <input
          type="text"
          placeholder="Search by title..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 border border-blue-500 bg-white  rounded-md w-full md:w-1/2 mx-auto focus:outline-none focus:ring-0"
        />
      </div>
    );
  }
  