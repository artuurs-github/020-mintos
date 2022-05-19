import { useState } from 'react';
import './App.scss';
import CurrencyButton from './components/CurrencyButton/CurrencyButton';
import CurrencyLabel from './components/CurrencyLabel/CurrencyLabel';
import currencyData from './data/currencyData';

const App = () => {
  const [selectedCurrencyLabels, setSelectedCurrencyLabels] = useState<string[]>([]);

  const removeCurrencyHandler = (label: string) => {
    setSelectedCurrencyLabels(selectedCurrencyLabels.filter((element) => element !== label));
  };

  const toggleCurrencyHandler = (label: string) => {
    if (selectedCurrencyLabels.includes(label)) {
      removeCurrencyHandler(label);
    } else {
      setSelectedCurrencyLabels(selectedCurrencyLabels
        .concat(currencyData
          .filter((element) => element === label)));
    }
  };

  const toggleStyleHandler = (label: string) => {
    const currencyButton = document.getElementById(label);
    currencyButton?.classList.toggle('currency-button--active');
    const currencyButtonCheckbox = currencyButton?.firstElementChild as HTMLInputElement;
    if (currencyButton?.className !== 'currency-button--active') {
      currencyButtonCheckbox.checked = !currencyButtonCheckbox.checked;
    }
  };

  return (
    <div className="currency-container">
      <div className="currency-container__selected">

        {selectedCurrencyLabels.map((label) => (
          <CurrencyLabel
            key={selectedCurrencyLabels.indexOf(label)}
            label={label}
            onClick={() => {
              removeCurrencyHandler(label);
              toggleStyleHandler(label);
            }}
          />
        ))}

      </div>
      <div className="currency-container__buttons">

        {currencyData.map((label) => (
          <CurrencyButton
            key={currencyData.indexOf(label)}
            id={label}
            label={label}
            onClick={() => {
              toggleCurrencyHandler(label);
              toggleStyleHandler(label);
            }}
          />
        ))}

      </div>
    </div>
  );
};

export default App;
