import { RecentProjectSliderPagination } from "../RecentProjectSliderPagination";

export const Pagination = () => {
  return (
    <div className="flex 2xl:hidden items-center justify-center gap-3 my-5">
      {[0, 1, 2].map((i) => (
        <RecentProjectSliderPagination key={i} index={i} />
      ))}
    </div>
  );
};
