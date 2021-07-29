type IconProps = {
  color: string;
};

export default function IconThemeDark({ color }: IconProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2313 11.5997C19.0739 13.3019 18.4351 14.9241 17.3895 16.2764C16.3439 17.6288 14.9347 18.6555 13.327 19.2362C11.7192 19.8169 9.97924 19.9278 8.31076 19.5557C6.64227 19.1837 5.11425 18.3442 3.90548 17.1354C2.69671 15.9267 1.85719 14.3986 1.48516 12.7302C1.11313 11.0617 1.22397 9.32174 1.80472 7.71395C2.38546 6.10616 3.41209 4.69702 4.76447 3.65141C6.11685 2.60579 7.73905 1.96696 9.44126 1.80965C8.44467 3.15792 7.9651 4.8191 8.08979 6.49107C8.21447 8.16303 8.93512 9.73471 10.1207 10.9203C11.3062 12.1058 12.8779 12.8264 14.5498 12.9511C16.2218 13.0758 17.883 12.5962 19.2313 11.5997V11.5997Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
