import { square } from "../../utils/icons";

const ManageColumns = ({ columns, handleColumns }) => {
  return (
    <div className="flex items-center gap-4 md:hidden">
      <button
        type="button"
        disabled={columns}
        onClick={handleColumns}
        className={`text-2xl  ${columns ? 'text-yellow' : 'text-gray'}`}
      >
        {square}
      </button>
      <button
        type="button"
        disabled={!columns}
        onClick={handleColumns}
        className={`text-2xl  ${columns ? 'text-gray' : 'text-yellow'}`}
      >
        {square} {square}
      </button>
    </div>
  );
};

export default ManageColumns;
