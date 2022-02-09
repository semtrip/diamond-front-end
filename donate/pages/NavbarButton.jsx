import React from "react";

import '../css/navbarButton.css';

function NavbarButton(props) {
  let icon;
  switch (props.icon) {
    case 'main':
      icon = <svg class="icon-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.22063L6.5051 0.220545C6.63637 0.0793302 6.81438 0 7 0C7.18561 0 7.36363 0.0793302 7.4949 0.220545L14 7.22063H12.6V13.2467C12.6 13.4465 12.5263 13.6381 12.395 13.7794C12.2637 13.9206 12.0857 14 11.9 14H8.4V8.72715H5.6V14H2.1C1.91435 14 1.7363 13.9206 1.60503 13.7794C1.47375 13.6381 1.4 13.4465 1.4 13.2467V7.22063H0Z" fill="#434D60" />
        </svg>;
      break;
    case 'cars':
      icon = <svg class="icon-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 11.375V7.3125C0 6.88152 0.163888 6.4682 0.455612 6.16345C0.747335 5.85871 1.143 5.6875 1.55556 5.6875V3.25C1.55556 2.38805 1.88333 1.5614 2.46678 0.951903C3.05023 0.34241 3.84155 0 4.66667 0H9.33333C10.1585 0 10.9498 0.34241 11.5332 0.951903C12.1167 1.5614 12.4444 2.38805 12.4444 3.25V5.6875C12.857 5.6875 13.2527 5.85871 13.5444 6.16345C13.8361 6.4682 14 6.88152 14 7.3125V11.375C14 11.806 13.8361 12.2193 13.5444 12.524C13.2527 12.8288 12.857 13 12.4444 13C12.0319 13 11.6362 12.8288 11.3445 12.524C11.0528 12.2193 10.8889 11.806 10.8889 11.375H3.11111C3.11111 11.806 2.94722 12.2193 2.6555 12.524C2.36378 12.8288 1.96811 13 1.55556 13C1.143 13 0.747335 12.8288 0.455612 12.524C0.163888 12.2193 0 11.806 0 11.375ZM4.66667 1.625C4.25411 1.625 3.85845 1.7962 3.56672 2.10095C3.275 2.4057 3.11111 2.81902 3.11111 3.25V5.6875H10.8889V3.25C10.8889 2.81902 10.725 2.4057 10.4333 2.10095C10.1416 1.7962 9.74589 1.625 9.33333 1.625H4.66667ZM2.33333 8.9375C2.53961 8.9375 2.73744 8.8519 2.88331 8.69952C3.02917 8.54715 3.11111 8.34049 3.11111 8.125C3.11111 7.90951 3.02917 7.70285 2.88331 7.55048C2.73744 7.3981 2.53961 7.3125 2.33333 7.3125C2.12705 7.3125 1.92922 7.3981 1.78336 7.55048C1.6375 7.70285 1.55556 7.90951 1.55556 8.125C1.55556 8.34049 1.6375 8.54715 1.78336 8.69952C1.92922 8.8519 2.12705 8.9375 2.33333 8.9375ZM11.6667 8.9375C11.8729 8.9375 12.0708 8.8519 12.2166 8.69952C12.3625 8.54715 12.4444 8.34049 12.4444 8.125C12.4444 7.90951 12.3625 7.70285 12.2166 7.55048C12.0708 7.3981 11.8729 7.3125 11.6667 7.3125C11.4604 7.3125 11.2626 7.3981 11.1167 7.55048C10.9708 7.70285 10.8889 7.90951 10.8889 8.125C10.8889 8.34049 10.9708 8.54715 11.1167 8.69952C11.2626 8.8519 11.4604 8.9375 11.6667 8.9375Z" fill="#434D60"/>
      </svg>
      ;
      break;
    case 'clothes':
      icon = <svg class="icon-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.11491 1.70297L4.14203 1.74541C3.74968 1.7974 3.35822 1.85582 2.96778 1.92062C2.56506 1.98844 1.69991 2.30912 1.12416 2.53356L1.12066 2.49222L0.4375 2.71425L0.633938 5.41231L1.36347 5.47444L1.35909 5.42281L3.25959 5.56981C3.29328 7.81441 3.02619 10.4814 2.84462 12.0407L2.78097 12.026L2.73109 13.0071C2.73109 13.0071 4.55919 13.5253 6.99825 13.5625V12.5475L6.99956 3.01766L4.90831 0.4375L4.11491 1.70297ZM0.838688 5.21019L0.668281 2.86934L0.925313 2.78556L1.12459 5.23469L0.838688 5.21019ZM6.7795 13.3392C4.92056 13.2878 3.44181 12.9598 2.95859 12.8402L2.98616 12.2957C3.57853 12.4215 5.11678 12.7144 6.7795 12.7619V13.3392V13.3392ZM6.37131 12.0118C6.08825 12.0118 5.85813 11.7976 5.85813 11.5336C5.85813 11.2696 6.08825 11.0554 6.37131 11.0554C6.65459 11.0554 6.8845 11.2696 6.8845 11.5336C6.8845 11.7976 6.65459 12.0118 6.37131 12.0118ZM6.37131 10.2677C6.08825 10.2677 5.85813 10.0535 5.85813 9.78928C5.85813 9.52547 6.08825 9.31131 6.37131 9.31131C6.65459 9.31131 6.8845 9.52547 6.8845 9.78928C6.8845 10.0535 6.65459 10.2677 6.37131 10.2677ZM6.37131 8.52381C6.08825 8.52381 5.85813 8.30966 5.85813 8.04562C5.85813 7.78159 6.08825 7.56722 6.37131 7.56722C6.65459 7.56722 6.8845 7.78137 6.8845 8.04562C6.8845 8.30944 6.65459 8.52381 6.37131 8.52381ZM6.37131 6.7795C6.08825 6.7795 5.85813 6.56556 5.85813 6.30153C5.85813 6.03728 6.08825 5.82313 6.37131 5.82313C6.65459 5.82313 6.8845 6.03728 6.8845 6.30153C6.8845 6.56578 6.65459 6.7795 6.37131 6.7795ZM6.8845 4.55744C6.8845 4.82147 6.65459 5.03563 6.37131 5.03563C6.08825 5.03563 5.85813 4.82147 5.85813 4.55744C5.85813 4.29341 6.08825 4.07925 6.37131 4.07925C6.65459 4.07925 6.8845 4.29341 6.8845 4.55744ZM6.68806 2.98091L5.68072 3.75353L4.37347 1.70209L4.93106 0.813094L6.68806 2.98091Z" fill="#434D60" />
        <path d="M12.8798 2.49222L12.8763 2.53356C12.3005 2.30956 11.4352 1.98844 11.0327 1.92062C10.6422 1.85592 10.2508 1.79751 9.85842 1.74541L9.88554 1.70297L9.09214 0.4375H4.90833L5.99792 1.78128H8.00254L6.99958 3.01766L7.23823 3.20053V13.5562C9.55764 13.4903 11.2694 13.0071 11.2694 13.0071L11.2195 12.026L11.156 12.0409C10.9745 10.4814 10.707 7.81441 10.7409 5.56981L12.6407 5.42281L12.6363 5.47444L13.3661 5.41231L13.5625 2.71425L12.8798 2.49222V2.49222ZM9.06939 0.812875L9.62698 1.70209L8.31951 3.75353L7.31108 2.98069L9.06939 0.812875V0.812875ZM11.0143 12.2964L11.0419 12.84C10.5794 12.9539 9.20545 13.2584 7.45698 13.3295V12.754C9.01514 12.6954 10.4469 12.4187 11.0143 12.2964V12.2964ZM13.1613 5.21019L12.8752 5.23447L13.0751 2.78578L13.3317 2.86934L13.1613 5.21019Z" fill="#434D60" />
      </svg>;
      break;
    case 'services':
      icon = <svg class="icon-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.51789 8.21343L9.49788 6.51603C9.56087 6.41082 9.53288 6.27756 9.44188 6.2004L8.40589 5.38677C8.42689 5.23247 8.44089 5.07114 8.44089 4.90982C8.44089 4.7485 8.42689 4.58717 8.40589 4.42585L9.44188 3.61222C9.53288 3.53507 9.56087 3.4018 9.49788 3.29659L8.51789 1.5992C8.45489 1.49399 8.32889 1.4519 8.21689 1.49399L6.9989 1.98497C6.74691 1.78858 6.47391 1.62725 6.17291 1.501L5.99091 0.203407C5.97917 0.146679 5.94852 0.0956405 5.90399 0.0586763C5.85947 0.0217121 5.80373 0.00102031 5.74592 0H3.78594C3.66694 0 3.56194 0.0911823 3.54094 0.210421L3.35894 1.50802C3.06494 1.63427 2.78495 1.79559 2.53295 1.99198L1.31496 1.501C1.20296 1.45892 1.07697 1.501 1.01397 1.60621L0.0339766 3.30361C-0.0290228 3.40882 -0.00102294 3.54208 0.0899761 3.61924L1.12596 4.43287C1.10497 4.58717 1.09097 4.7485 1.09097 4.90982C1.09097 5.07114 1.10497 5.23246 1.12596 5.39379L0.0899761 6.20742C-0.00102294 6.28457 -0.0290228 6.41784 0.0339766 6.52305L1.01397 8.22044C1.07697 8.32565 1.20296 8.36774 1.31496 8.32565L2.53295 7.83467C2.78495 8.03106 3.05794 8.19238 3.35894 8.31864L3.54094 9.61623C3.56194 9.72846 3.66694 9.81964 3.78594 9.81964H5.74592C5.86491 9.81964 5.96991 9.72846 5.99091 9.60922L6.17291 8.31162C6.46691 8.18537 6.74691 8.02405 6.9989 7.82766L8.21689 8.31864C8.32889 8.36072 8.45489 8.31864 8.51789 8.21343ZM4.76593 6.31263C3.99593 6.31263 3.36594 5.68136 3.36594 4.90982C3.36594 4.13828 3.99593 3.50701 4.76593 3.50701C5.53592 3.50701 6.16591 4.13828 6.16591 4.90982C6.16591 5.68136 5.53592 6.31263 4.76593 6.31263ZM13.9428 11.6924L13.2708 11.1733C13.2848 11.0752 13.2988 10.9699 13.2988 10.8647C13.2988 10.7595 13.2918 10.6543 13.2708 10.5561L13.9358 10.0371C13.9918 9.98798 14.0128 9.90381 13.9708 9.83367L13.3408 8.74649C13.3058 8.67635 13.2218 8.65531 13.1448 8.67635L12.3678 8.99198C12.2068 8.86573 12.0318 8.76052 11.8359 8.68337L11.7169 7.85571C11.7141 7.81822 11.6975 7.7831 11.6703 7.75718C11.6432 7.73125 11.6074 7.71637 11.5699 7.71543H10.3169C10.2399 7.71543 10.1699 7.77154 10.1629 7.8487L10.0439 8.67635C9.85487 8.76052 9.67287 8.85872 9.51188 8.98497L8.73488 8.66934C8.69921 8.6559 8.65994 8.65557 8.62405 8.66841C8.58817 8.68125 8.55799 8.70644 8.53889 8.73948L7.90889 9.82665C7.87389 9.89679 7.88089 9.98096 7.94389 10.0301L8.60889 10.5491C8.58002 10.7538 8.58002 10.9616 8.60889 11.1663L7.94389 11.6854C7.88789 11.7345 7.86689 11.8186 7.90889 11.8888L8.53889 12.976C8.57389 13.0461 8.65788 13.0671 8.73488 13.0461L9.51188 12.7305C9.67287 12.8567 9.84787 12.9619 10.0439 13.0391L10.1629 13.8667C10.1769 13.9439 10.2399 14 10.3169 14H11.5699C11.6469 14 11.7169 13.9439 11.7239 13.8667L11.8429 13.0391C12.0318 12.9549 12.2138 12.8567 12.3678 12.7305L13.1518 13.0461C13.2218 13.0741 13.3058 13.0461 13.3478 12.976L13.9778 11.8888C14.0198 11.8257 13.9988 11.7415 13.9428 11.6924ZM10.9399 11.8046C10.6891 11.8045 10.4487 11.7046 10.2715 11.5269C10.0943 11.3492 9.99478 11.1082 9.99487 10.857C9.99496 10.6058 10.0947 10.3649 10.272 10.1873C10.4494 10.0097 10.6898 9.91003 10.9406 9.91012C11.1913 9.91021 11.4317 10.0101 11.6089 10.1878C11.7861 10.3655 11.8856 10.6065 11.8856 10.8577C11.8855 11.1089 11.7858 11.3498 11.6084 11.5274C11.4311 11.705 11.1906 11.8047 10.9399 11.8046Z" fill="#434D60"/>
      </svg>;
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <div className={`navbar-button ${props.isActive ? 'active' : ''}`} id={props.index} onClick={props.onClick}>
        <div className="icon">
          {icon}
        </div>
        <div className="title">{props.name}</div>
      </div>
    </React.Fragment>
  )
}

export default NavbarButton;