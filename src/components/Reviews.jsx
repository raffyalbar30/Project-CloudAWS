import { FaStar, FaRegStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="w-full">
      {/* Title */}
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 lg:text-3xl">
        Reviews
      </h2>

      {/* Review Information */}
      <div className="space-y-3 text-sm text-gray-700 lg:text-base">
        <p>There Are No Reviews Yet.</p>

        <div>
          <p>
            Be The First To Review "Buy AWS Account"
          </p>

          <p>
            Your Email Address Will Not Be Published. Required Fields Are
            Marked <span className="text-red-500">*</span>
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-4">
        <p className="mb-1 text-sm text-gray-700 lg:text-base">
          Your Rating
        </p>

        <div className="flex items-center gap-1">
          <FaStar className="text-xl text-[#2f3cff] lg:text-2xl" />

          <FaRegStar className="text-xl text-[#2f3cff] lg:text-2xl" />
          <FaRegStar className="text-xl text-[#2f3cff] lg:text-2xl" />
          <FaRegStar className="text-xl text-[#2f3cff] lg:text-2xl" />
          <FaRegStar className="text-xl text-[#2f3cff] lg:text-2xl" />
        </div>
      </div>

      {/* Review Form */}
      <form className="mt-5 w-full space-y-4">
        {/* Review */}
        <div>
          <label className="mb-1 block text-sm text-gray-700 lg:text-base">
            Your Review <span className="text-red-500">*</span>
          </label>

          <textarea
            rows={5}
            className="
              w-full
              resize-y
              border
              border-gray-500
              bg-white
              px-3
              py-2
              text-sm
              text-gray-900
              outline-none
              focus:border-gray-700
              lg:text-base
            "
          />
        </div>

        {/* Name */}
        <div>
          <label className="mb-1 block text-sm text-gray-700 lg:text-base">
            Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            className="
              h-10
              w-full
              border
              border-gray-500
              bg-white
              px-3
              text-sm
              outline-none
              focus:border-gray-700
              lg:h-11
              lg:text-base
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm text-gray-700 lg:text-base">
            Email <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            className="
              h-10
              w-full
              border
              border-gray-500
              bg-white
              px-3
              text-sm
              outline-none
              focus:border-gray-700
              lg:h-11
              lg:text-base
            "
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="save-info"
            className="mt-1 h-3 w-3 cursor-pointer"
          />

          <label
            htmlFor="save-info"
            className="cursor-pointer text-xs text-gray-700 lg:text-sm"
          >
            Save My Name, Email, And Website In This Browser For The Next Time
            I Comment.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            bg-[#ebe8ee]
            px-3
            py-2
            text-sm
            text-gray-800
            transition
            hover:bg-[#ddd9e2]
            lg:px-4
            lg:py-2
          "
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Reviews;