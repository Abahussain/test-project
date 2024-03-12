import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const Blog = () => {
  return (
    <>
      <Header />
      <div className="px-8 py-16">
        <div className="grid gap-8 items-start justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur"></div>
            <button
              className="relative px-7 py-4 bg-gray-200 dark:bg-black rounded-lg leading-none
           flex items-center divide-x divide-gray-600"
            >
              <span className="flex items-center">
                <span className="text-nowrap text-indigo-400">Blog Page</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
