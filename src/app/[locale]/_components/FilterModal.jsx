import Image from "next/image";
import Filter from "./categoryPage/Filter";

const FilterModal = ({ length }) => {
  return (
    <div>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#filterModal"
        className="d-flex d-lg-none border-0 bg-transparent p-0 ms-auto"
      >
        <Image
          src="/icons/filterModal.png"
          alt="filter"
          width={30}
          height={30}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </button>

      <div
        className="modal fade"
        id="filterModal"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-dialog">
            <div className="modal-content">
              <Filter length={length} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
