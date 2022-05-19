import './CurrencyLabel.scss';

type CurrencyLabelProps = {
  label: string,
  onClick: () => void,
}

const CurrencyLabel = ({ label, onClick }: CurrencyLabelProps) => {
  const a = 5;

  return (
    <div className="currency-label">
      <span className="currency-label__text">{label}</span>
      <button className="currency-label__button" onClick={onClick}> </button>
    </div>
  );
};

export default CurrencyLabel;
