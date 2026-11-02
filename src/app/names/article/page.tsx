const page = () => {
  return (
    <div className="px-6 py-16 sm:px-8 sm:py-24">
      <form
        action=""
        className="mx-auto flex max-w-2xl flex-col gap-6 border border-[#4f3130]/20 bg-[#f0dfbd] p-6 shadow-[0_18px_50px_rgba(79,49,48,0.08)] sm:gap-8 sm:p-10"
      >
        <input
          type="text"
          name=""
          id=""
          className="w-full border-b border-[#4f3130]/35 bg-transparent px-1 py-3 text-base text-[#4f3130] outline-none transition placeholder:text-[#753742]/65 focus:border-[#aa5042] focus:ring-0 sm:text-lg"
        />
        <input
          type="text"
          name=""
          id=""
          className="w-full border-b border-[#4f3130]/35 bg-transparent px-1 py-3 text-base text-[#4f3130] outline-none transition placeholder:text-[#753742]/65 focus:border-[#aa5042] focus:ring-0 sm:text-lg"
        />
        <textarea
          name=""
          id=""
          className="min-h-40 w-full resize-y border-b border-[#4f3130]/35 bg-transparent px-1 py-3 text-base leading-7 text-[#4f3130] outline-none transition placeholder:text-[#753742]/65 focus:border-[#aa5042] focus:ring-0 sm:min-h-48 sm:text-lg"
        />
      </form>
    </div>
  );
};

export default page;
