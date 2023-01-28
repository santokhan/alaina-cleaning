import { Link } from "react-router-dom";
import SLayout, {
  SDes,
  SHeader,
  SIcon,
  SMain,
  STitle,
} from "../section-layout/SectionLayout";

export default function Team({ children }) {
  return (
    <SLayout>
      <SHeader>
        <SIcon>
          <i className="fa fa-users" aria-hidden="true"></i>
        </SIcon>
        <STitle>Our Team Members</STitle>
        <SDes>
          Meet our creative team members, they are world class problem solver.
        </SDes>
      </SHeader>
      <SMain>
        <TCard>
          <img
            src="/images/team.png"
            alt="member"
            className="w-60 h-60 rounded-[20%]"
          />
          <div className="flex flex-col items-center">
            <TName>Name</TName>
            <TStatus>Title</TStatus>
          </div>
          <Social></Social>
        </TCard>
        <TCard>
          <img
            src="/images/team.png"
            alt="member"
            className="w-60 h-60 rounded-[20%]"
          />
          <div className="flex flex-col items-center">
            <TName>Name</TName>
            <TStatus>Title</TStatus>
          </div>
          <Social></Social>
        </TCard>
        <TCard>
          <img
            src="/images/team.png"
            alt="member"
            className="w-60 h-60 rounded-[20%]"
          />
          <div className="flex flex-col items-center">
            <TName>Name</TName>
            <TStatus>Title</TStatus>
          </div>
          <Social></Social>
        </TCard>
        <TCard>
          <img
            src="/images/team.png"
            alt="member"
            className="w-60 h-60 rounded-[20%]"
          />
          <div className="flex flex-col items-center">
            <TName>Name</TName>
            <TStatus>Title</TStatus>
          </div>
          <Social></Social>
        </TCard>
        <TCard>
          <img
            src="/images/team.png"
            alt="member"
            className="w-60 h-60 rounded-[20%]"
          />
          <div className="flex flex-col items-center">
            <TName>Name</TName>
            <TStatus>Title</TStatus>
          </div>
          <Social></Social>
        </TCard>
        <TCard>
          <img
            src="/images/team.png"
            alt="member"
            className="w-60 h-60 rounded-[20%]"
          />
          <div className="flex flex-col items-center">
            <TName>Name</TName>
            <TStatus>Title</TStatus>
          </div>
          <Social></Social>
        </TCard>
      </SMain>
    </SLayout>
  );
}

export function TCard({ children }) {
  return <div className="flex flex-col items-center gap-2">{children}</div>;
}
export function TName({ children }) {
  return <div className="font-bold text-lg blur-sm">{children}</div>;
}
export function TStatus({ children }) {
  return <div className="text-textgray text-sm blur-sm">{children}</div>;
}
export function Social() {
  return <SocialIcon2></SocialIcon2>;
}
export function SocialIcon1() {
  return (
    <div className="flex justify-center items-center gap-5 lg:gap-10">
      <Link to="/" className="text-xl block icon-jump">
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9915 11.2493L11.5614 7.63143H8.0507V5.27982C8.0507 4.29056 8.54083 3.32391 10.1081 3.32391H11.7267V0.243075C10.7841 0.0929007 9.83167 0.0116567 8.87708 0C5.98759 0 4.10115 1.73544 4.10115 4.87281V7.63143H0.898193V11.2493H4.10115V20H8.0507V11.2493H10.9915Z"
            fill="#337FFF"
          />
        </svg>
      </Link>
      <a href="/" className="text-xl block icon-jump">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.39801 10C7.39801 8.15912 8.89082 6.6664 10.7328 6.6664C12.5748 6.6664 14.0684 8.15912 14.0684 10C14.0684 11.8409 12.5748 13.3336 10.7328 13.3336C8.89082 13.3336 7.39801 11.8409 7.39801 10ZM5.59485 10C5.59485 12.836 7.8951 15.1349 10.7328 15.1349C13.5705 15.1349 15.8708 12.836 15.8708 10C15.8708 7.164 13.5705 4.86512 10.7328 4.86512C7.8951 4.86512 5.59485 7.164 5.59485 10ZM14.8734 4.66152C14.8734 4.89886 14.9437 5.13089 15.0755 5.32829C15.2074 5.52568 15.3949 5.67956 15.6142 5.77047C15.8336 5.86138 16.075 5.88525 16.3079 5.83904C16.5409 5.79283 16.7549 5.67862 16.9229 5.51087C17.0909 5.34311 17.2053 5.12934 17.2517 4.89658C17.2981 4.66382 17.2745 4.42253 17.1837 4.20322C17.0929 3.98392 16.9391 3.79644 16.7417 3.6645C16.5442 3.53257 16.3121 3.4621 16.0746 3.462H16.0742C15.7558 3.46215 15.4506 3.58856 15.2255 3.81347C15.0003 4.03837 14.8737 4.34339 14.8734 4.66152V4.66152ZM6.69038 18.1398C5.71484 18.0954 5.1846 17.933 4.83223 17.7958C4.36507 17.614 4.03175 17.3975 3.6813 17.0478C3.33085 16.698 3.11392 16.3652 2.93285 15.8983C2.79549 15.5463 2.63299 15.0162 2.58864 14.0413C2.54013 12.9872 2.53045 12.6706 2.53045 10.0001C2.53045 7.3296 2.54093 7.01384 2.58864 5.95888C2.63307 4.98392 2.79677 4.45488 2.93285 4.10184C3.11472 3.63496 3.33133 3.30184 3.6813 2.9516C4.03127 2.60136 4.36427 2.38456 4.83223 2.2036C5.18444 2.06632 5.71484 1.90392 6.69038 1.8596C7.74509 1.81112 8.06192 1.80144 10.7328 1.80144C13.4037 1.80144 13.7208 1.81192 14.7764 1.8596C15.752 1.904 16.2813 2.0676 16.6346 2.2036C17.1017 2.38456 17.4351 2.60184 17.7855 2.9516C18.136 3.30136 18.3521 3.63496 18.534 4.10184C18.6713 4.45384 18.8338 4.98392 18.8782 5.95888C18.9267 7.01384 18.9364 7.3296 18.9364 10.0001C18.9364 12.6706 18.9267 12.9863 18.8782 14.0413C18.8337 15.0162 18.6704 15.5462 18.534 15.8983C18.3521 16.3652 18.1355 16.6983 17.7855 17.0478C17.4355 17.3972 17.1017 17.614 16.6346 17.7958C16.2824 17.933 15.752 18.0954 14.7764 18.1398C13.7217 18.1882 13.4049 18.1979 10.7328 18.1979C8.06072 18.1979 7.74477 18.1882 6.69038 18.1398V18.1398ZM6.60753 0.06056C5.54233 0.10904 4.81446 0.27784 4.1788 0.52504C3.52048 0.78032 2.96319 1.1228 2.40629 1.67848C1.8494 2.23416 1.50759 2.792 1.25216 3.44992C1.00481 4.0856 0.835912 4.81264 0.787403 5.8772C0.738093 6.94344 0.726807 7.28432 0.726807 10C0.726807 12.7157 0.738093 13.0566 0.787403 14.1228C0.835912 15.1874 1.00481 15.9144 1.25216 16.5501C1.50759 17.2076 1.84948 17.7661 2.40629 18.3215C2.96311 18.877 3.52048 19.219 4.1788 19.475C4.81566 19.7222 5.54233 19.891 6.60753 19.9394C7.67497 19.9879 8.0155 20 10.7328 20C13.4501 20 13.7912 19.9887 14.8581 19.9394C15.9234 19.891 16.6508 19.7222 17.2868 19.475C17.9447 19.219 18.5024 18.8772 19.0593 18.3215C19.6162 17.7658 19.9573 17.2076 20.2135 16.5501C20.4608 15.9144 20.6305 15.1874 20.6782 14.1228C20.7267 13.0558 20.738 12.7157 20.738 10C20.738 7.28432 20.7267 6.94344 20.6782 5.8772C20.6297 4.81256 20.4608 4.0852 20.2135 3.44992C19.9573 2.7924 19.6153 2.23504 19.0593 1.67848C18.5033 1.12192 17.9447 0.78032 17.2876 0.52504C16.6508 0.27784 15.9233 0.10824 14.8589 0.06056C13.792 0.01208 13.4509 0 10.7336 0C8.0163 0 7.67497 0.01128 6.60753 0.06056Z"
            fill="url(#paint0_radial_129_41074)"
          />
          <path
            d="M7.39801 10C7.39801 8.15912 8.89082 6.6664 10.7328 6.6664C12.5748 6.6664 14.0684 8.15912 14.0684 10C14.0684 11.8409 12.5748 13.3336 10.7328 13.3336C8.89082 13.3336 7.39801 11.8409 7.39801 10ZM5.59485 10C5.59485 12.836 7.89511 15.1349 10.7328 15.1349C13.5705 15.1349 15.8708 12.836 15.8708 10C15.8708 7.164 13.5705 4.86512 10.7328 4.86512C7.89511 4.86512 5.59485 7.164 5.59485 10ZM14.8734 4.66152C14.8734 4.89886 14.9437 5.13089 15.0755 5.32829C15.2074 5.52568 15.3949 5.67956 15.6142 5.77047C15.8336 5.86138 16.075 5.88524 16.3079 5.83904C16.5409 5.79283 16.7549 5.67862 16.9229 5.51087C17.0909 5.34311 17.2053 5.12934 17.2517 4.89658C17.2981 4.66382 17.2745 4.42253 17.1837 4.20322C17.0929 3.98392 16.9391 3.79644 16.7417 3.6645C16.5442 3.53257 16.3121 3.46209 16.0746 3.462H16.0742C15.7558 3.46215 15.4506 3.58856 15.2255 3.81347C15.0003 4.03837 14.8737 4.34339 14.8734 4.66152ZM6.69038 18.1398C5.71484 18.0954 5.1846 17.933 4.83223 17.7958C4.36507 17.614 4.03175 17.3975 3.6813 17.0478C3.33085 16.698 3.11392 16.3652 2.93285 15.8983C2.79549 15.5463 2.63299 15.0162 2.58864 14.0413C2.54013 12.9872 2.53045 12.6706 2.53045 10.0001C2.53045 7.3296 2.54093 7.01384 2.58864 5.95888C2.63307 4.98392 2.79677 4.45488 2.93285 4.10184C3.11472 3.63496 3.33133 3.30184 3.6813 2.9516C4.03127 2.60136 4.36427 2.38456 4.83223 2.2036C5.18444 2.06632 5.71484 1.90392 6.69038 1.8596C7.74509 1.81112 8.06193 1.80144 10.7328 1.80144C13.4037 1.80144 13.7208 1.81192 14.7764 1.8596C15.752 1.904 16.2813 2.0676 16.6346 2.2036C17.1017 2.38456 17.4351 2.60184 17.7855 2.9516C18.136 3.30136 18.3521 3.63496 18.534 4.10184C18.6713 4.45384 18.8338 4.98392 18.8782 5.95888C18.9267 7.01384 18.9364 7.3296 18.9364 10.0001C18.9364 12.6706 18.9267 12.9863 18.8782 14.0413C18.8337 15.0162 18.6704 15.5462 18.534 15.8983C18.3521 16.3652 18.1355 16.6983 17.7855 17.0478C17.4355 17.3972 17.1017 17.614 16.6346 17.7958C16.2824 17.933 15.752 18.0954 14.7764 18.1398C13.7217 18.1882 13.4049 18.1979 10.7328 18.1979C8.06072 18.1979 7.74477 18.1882 6.69038 18.1398ZM6.60753 0.06056C5.54233 0.10904 4.81446 0.27784 4.1788 0.52504C3.52048 0.78032 2.96319 1.1228 2.40629 1.67848C1.8494 2.23416 1.50759 2.792 1.25216 3.44992C1.00481 4.0856 0.835912 4.81264 0.787403 5.8772C0.738093 6.94344 0.726807 7.28432 0.726807 10C0.726807 12.7157 0.738093 13.0566 0.787403 14.1228C0.835912 15.1874 1.00481 15.9144 1.25216 16.5501C1.50759 17.2076 1.84948 17.7661 2.40629 18.3215C2.96311 18.877 3.52048 19.219 4.1788 19.475C4.81566 19.7222 5.54233 19.891 6.60753 19.9394C7.67497 19.9879 8.0155 20 10.7328 20C13.4501 20 13.7912 19.9887 14.8581 19.9394C15.9234 19.891 16.6508 19.7222 17.2868 19.475C17.9447 19.219 18.5024 18.8772 19.0593 18.3215C19.6162 17.7658 19.9573 17.2076 20.2135 16.5501C20.4608 15.9144 20.6305 15.1874 20.6782 14.1228C20.7267 13.0558 20.738 12.7157 20.738 10C20.738 7.28432 20.7267 6.94344 20.6782 5.8772C20.6297 4.81256 20.4608 4.0852 20.2135 3.44992C19.9573 2.7924 19.6153 2.23504 19.0593 1.67848C18.5033 1.12192 17.9447 0.78032 17.2876 0.52504C16.6508 0.27784 15.9233 0.10824 14.8589 0.06056C13.792 0.01208 13.4509 0 10.7336 0C8.0163 0 7.67497 0.01128 6.60753 0.06056Z"
            fill="url(#paint1_radial_129_41074)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_129_41074"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(3.38552 20.0945) scale(26.124 26.1083)"
            >
              <stop offset="0.09" stopColor="#FA8F21" />
              <stop offset="0.78" stopColor="#D82D7E" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_129_41074"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12.8632 20.9905) scale(20.5893 20.577)"
            >
              <stop offset="0.64" stopColor="#8C3AAA" stopOpacity="0" />
              <stop offset="1" stopColor="#8C3AAA" />
            </radialGradient>
          </defs>
        </svg>
      </a>
      <a href="/" className="text-xl block icon-jump">
        <svg
          width="25"
          height="20"
          viewBox="0 0 25 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.8921 2.40255C24.1072 2.74031 23.2821 2.97551 22.4372 3.10233C22.8322 3.03461 23.4135 2.32354 23.6449 2.03573C23.9964 1.6016 24.2643 1.10599 24.4349 0.574101C24.4349 0.534597 24.4744 0.478164 24.4349 0.449947C24.415 0.43908 24.3927 0.433386 24.37 0.433386C24.3474 0.433386 24.3251 0.43908 24.3051 0.449947C23.3876 0.946801 22.4112 1.32601 21.3988 1.57862C21.3635 1.5894 21.326 1.59037 21.2902 1.58142C21.2544 1.57247 21.2217 1.55394 21.1957 1.52783C21.1169 1.434 21.032 1.3454 20.9417 1.26259C20.5288 0.89264 20.0603 0.58985 19.5534 0.365296C18.8692 0.0845823 18.1301 -0.0369888 17.392 0.00976414C16.6758 0.0549945 15.9766 0.247089 15.3378 0.574101C14.7088 0.918867 14.156 1.38724 13.7126 1.95108C13.2461 2.53142 12.9094 3.20491 12.725 3.92626C12.5729 4.61241 12.5556 5.32157 12.6742 6.01431C12.6742 6.13282 12.6742 6.14975 12.5726 6.13282C8.54887 5.54026 5.2475 4.11249 2.54998 1.04814C2.43147 0.912703 2.36939 0.912703 2.27345 1.04814C1.09963 2.83145 1.66961 5.65313 3.13689 7.04704C3.3344 7.23327 3.53756 7.41386 3.75201 7.58316C3.07928 7.5354 2.42297 7.35309 1.82198 7.04704C1.70911 6.97368 1.64704 7.01318 1.64139 7.14862C1.6254 7.33639 1.6254 7.52519 1.64139 7.71296C1.75915 8.61285 2.11379 9.46532 2.66905 10.1832C3.22431 10.9011 3.96028 11.4586 4.80168 11.7988C5.00679 11.8866 5.22052 11.9528 5.43938 11.9963C4.81659 12.1189 4.17784 12.138 3.54885 12.0527C3.41341 12.0245 3.36262 12.0979 3.41341 12.2277C4.24299 14.485 6.04322 15.1735 7.36377 15.5572C7.54435 15.5855 7.72494 15.5855 7.9281 15.6306C7.9281 15.6306 7.9281 15.6306 7.89424 15.6645C7.50485 16.3755 5.93035 16.8552 5.208 17.1035C3.88953 17.5771 2.48379 17.7581 1.08834 17.634C0.868253 17.6001 0.817463 17.6058 0.761029 17.634C0.704595 17.6622 0.761029 17.7243 0.823106 17.7807C1.10527 17.967 1.38744 18.1306 1.6809 18.2886C2.55452 18.7651 3.47811 19.1436 4.43486 19.4173C9.38973 20.783 14.9654 19.7785 18.6844 16.0821C21.6076 13.1814 22.6347 9.18023 22.6347 5.17344C22.6347 5.02107 22.8209 4.93078 22.9282 4.85177C23.6677 4.27552 24.3198 3.59499 24.8638 2.83145C24.9581 2.71763 25.0064 2.57272 24.9993 2.42512C24.9993 2.34047 24.9993 2.3574 24.8921 2.40255Z"
            fill="#33CCFF"
          />
        </svg>
      </a>
    </div>
  );
}
export function SocialIcon2() {
  return (
    <div className="flex justify-center items-center gap-5 lg:gap-10">
      <a href="/" className="text-xl block icon-jump">
        <i className="fab fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="/" className="text-xl block icon-jump">
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="/" className="text-xl block icon-jump">
        <i className="fab fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  );
}
