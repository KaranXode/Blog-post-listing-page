import Cards from "../Cards/Cards";


type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

export default function CardGrid({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Cards key={post.id} {...post} />
      ))}
    </div>
  );
}
