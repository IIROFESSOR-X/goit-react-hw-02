import { c, i } from 'vite/dist/node/types.d-AKzkD8vd';
import css from './Options.module.css';
import { createLogger } from 'vite';
import { ssrImportMetaKey } from 'vite/runtime';
export const Options = ({ onButtonClick, onResetClick, totalReviews }) => {
  return (
    <ul className={css.list}>
      <li>
        <button onClick={onButtonClick} className={css.button} data-id="good">
          Goode
        </button>
      </li>
      <li>
        <button
          onClick={onButtonClick}
          className={css.button}
          data-id="neutral"
        >
          Neutral
        </button>
      </li>
      <li>
        <button onClick={onButtonClick} className={css.button} data-id="bad">
          Bad
        </button>
      </li>
      {totalReviews > 0 && (
        <li>
          <button onClick={onResetClick} className={css.reset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};