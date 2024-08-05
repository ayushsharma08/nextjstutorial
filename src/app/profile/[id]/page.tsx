export default function UserProfile({ params }: any) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1>Profile</h1>
      <hr />
      <p className="text-white text-3xl">
        Profile<span className="p-2 bg-orange-500 text-black">{params.id}</span>
      </p>
    </div>
  );
}
