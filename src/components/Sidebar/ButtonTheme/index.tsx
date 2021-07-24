import { useState } from 'react'
import './styles.scss'


type ButtonThemeProps = {
  theme:boolean;
//  setTheme(value:boolean):void;
}

export default function ButtonTheme(props:ButtonThemeProps) {
  const [dark, setDark] = useState(false);
  return (
      <button onClick={()=>{setDark(!dark)}}>
        {props.theme ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 1V3"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21V23"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.22 4.22L5.64 5.64"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.36 18.36L19.78 19.78"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 12H3"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 12H23"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.22 19.78L5.64 18.36"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.36 5.64L19.78 4.22"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2313 11.5997C19.0739 13.3019 18.4351 14.9241 17.3895 16.2764C16.3439 17.6288 14.9347 18.6555 13.327 19.2362C11.7192 19.8169 9.97924 19.9278 8.31076 19.5557C6.64227 19.1837 5.11425 18.3442 3.90548 17.1354C2.69671 15.9267 1.85719 14.3986 1.48516 12.7302C1.11313 11.0617 1.22397 9.32174 1.80472 7.71395C2.38546 6.10616 3.41209 4.69702 4.76447 3.65141C6.11685 2.60579 7.73905 1.96696 9.44126 1.80965C8.44467 3.15792 7.9651 4.8191 8.08979 6.49107C8.21447 8.16303 8.93512 9.73471 10.1207 10.9203C11.3062 12.1058 12.8779 12.8264 14.5498 12.9511C16.2218 13.0758 17.883 12.5962 19.2313 11.5997V11.5997Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
  );
}
