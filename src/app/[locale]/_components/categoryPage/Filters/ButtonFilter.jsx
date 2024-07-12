import Image from "next/image";

const ButtonFilter = ({ options, stateKey, state, handleFilterChange }) => {
  return (
    <div role="group">
      {options.map((option) => (
        <button
          key={option}
          className={`w-100 border-0 rounded-3 mb-lg-2 px-lg-3 py-lg-2 py-1 d-flex justify-content-between align-items-center ${
            state[stateKey].includes(option)
              ? "bg-body-secondary"
              : "bg-transparent"
          }`}
          onClick={() => {
            const newValue = state[stateKey].includes(option)
              ? state[stateKey].filter((item) => item !== option)
              : [...state[stateKey], option];
            handleFilterChange(stateKey, newValue);
          }}
        >
          <p className="mb-0">{option}</p>
          <Image
            src="/icons/right-small-arrow.png"
            alt="right-arrow"
            width={16}
            height={16}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </button>
      ))}
    </div>
  );
};

export default ButtonFilter;
