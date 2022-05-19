import './CurrencyButton.scss';

type CurrencyButtonProps = {
  id: string
  label: string,
  onClick: () => void,
}

const CurrencyButton = ({ id, label, onClick }: CurrencyButtonProps) => (

  <button
    id={id}
    className="currency-button"
    onClick={onClick}
  >

    <input
      className="currency-button__checkbox"
      type="checkbox"
    />
    <span className="currency-button__label">
      {label}
    </span>

  </button>

);

export default CurrencyButton;
